import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import axios from "axios";
import styles from "./PreviousWinners.module.css";

function PreviousWinners() {
  const [programme, setProgramme] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [award, setAward] = useState("");
  const [winners, setWinners] = useState([]);


  const awardMapping = {
    "Director's Gold": 2,
    "Director's Silver": 3,
    "Merit-cum-means Scholarship": 1,
    "Notional Prizes": 4,
    "D&M Proficiency Gold Medal": 5,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const awardId = awardMapping[award];

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
        },
      );

      if (response.data.result === "Success") {
        // Assuming each of these fields is an array
        const { student_name, student_program, roll } = response.data;
        const winnersArray = student_name.map((name, index) => ({
          name,
          program: student_program[index],
          roll: roll[index],
        }));

        setWinners(winnersArray);
      } else {
        console.error("No winners found:", response.data.error);
        setWinners([]); // Clear winners if not found
      }
    } catch (error) {
      console.error(
        "Error fetching winners:",
        error.response ? error.response.data : error.message,
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          {/* Programme Selection */}
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
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
                  <option key={2014 + i} value={2014 + i}>
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
                {Object.keys(awardMapping).map((awardName) => (
                  <option key={awardMapping[awardName]} value={awardName}>
                    {awardName}
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
            Submit
          </button>
        </div>
      </form>

      {/* Winners List */}
      <div className={styles.winnersList}>
        {winners.length > 0 ? (
          <ul>
            {winners.map((winner, index) => (
              <li key={index}>
                {winner.name} - {winner.roll} - {winner.program}
              </li>
            ))}
          </ul>
        ) : (
          <div>No winners found</div>
        )}
      </div>
    </div>
  );
}

export default PreviousWinners;
