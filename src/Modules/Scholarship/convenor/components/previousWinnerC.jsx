/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import axios from "axios";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./previousWinnersC.module.css";

function PreviousWinners() {
  const [programme, setProgramme] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [award, setAward] = useState("");
  const [winners, setWinners] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const awardMapping = {
    "Director's Gold": 2,
    "Director's Silver": 3,
    "Merit-cum-means Scholarship": 1,
    "Notional Prizes": 4,
    "D&M Proficiency Gold Medal": 5,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!programme || !academicYear || !award) {
      alert("Please select all fields before submitting.");
      return;
    }

    const awardId = awardMapping[award];
    setShowTable(false);
    setIsLoading(true);

    const formData = {
      programme,
      batch: parseInt(academicYear, 10),
      award_id: awardId,
    };

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://127.0.0.1:8000/spacs/get-winners/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.result === "Success") {
        const { student_name, student_program, roll } = response.data;
        const winnersArray = student_name.map((name, index) => ({
          name,
          program: student_program[index],
          roll: roll[index],
        }));

        setWinners(winnersArray);
        setShowTable(true);
      } else {
        console.error("No winners found:", response.data.error);
        setWinners([]);
      }
    } catch (error) {
      console.error(
        "Error fetching winners:",
        error.response ? error.response.data : error.message
      );
      alert("An error occurred while fetching data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          {/* Programme Selection */}
          <div className={styles.formItem}>
            <label htmlFor="programme1" className={styles.label}>
              Programme
            </label>
            <div className={styles.selectContainer}>
              <select
                id="programme1"
                className={styles.select}
                value={programme}
                onChange={(e) => setProgramme(e.target.value)}
              >
                <option value="">Select Programme</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="B.Des">B.Des</option>
                <option value="M.Des">M.Des</option>
                <option value="PhD">PhD</option>
              </select>
              <CaretDown className={styles.caretIcon} />
            </div>
          </div>

          {/* Academic Year Selection */}
          <div className={styles.formItem}>
            <label htmlFor="academicProgramme" className={styles.label}>
              Academic Year
            </label>
            <div className={styles.selectContainer}>
              <select
                id="academicProgramme"
                className={styles.select}
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {[...Array(11).keys()].map((i) => (
                  <option key={i} value={2014 + i}>
                    {2014 + i}
                  </option>
                ))}
              </select>
              <CaretDown className={styles.caretIcon} />
            </div>
          </div>

          {/* Scholarship/Award Selection */}
          <div className={styles.formItem}>
            <label htmlFor="programme2" className={styles.label}>
              Scholarship/Awards
            </label>
            <div className={styles.selectContainer}>
              <select
                id="programme2"
                className={styles.select}
                value={award}
                onChange={(e) => setAward(e.target.value)}
              >
                <option value="">Select Award</option>
                {Object.keys(awardMapping).map((award) => (
                  <option key={award} value={award}>
                    {award}
                  </option>
                ))}
              </select>
              <CaretDown className={styles.caretIcon} />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Table for Winners */}
      {showTable && winners.length > 0 && (
        <div className={styles.tableContainer}>
          <h2>Previous Winners</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Program</th>
                <th>Roll Number</th>
              </tr>
            </thead>
            <tbody>
              {winners.map((winner, index) => (
                <tr key={index}>
                  <td>{winner.name}</td>
                  <td>{winner.program}</td>
                  <td>{winner.roll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PreviousWinners;
