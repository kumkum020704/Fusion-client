import React, { useState } from "react";
import styles from "./ScholarshipStatus.module.css";
import { Table } from "@mantine/core";

function ScholarshipStatus() {
  const [page, setPage] = useState(1);
  const [showStatus, setShowStatus] = useState(false);
  const [applications, setApplications] = useState([]);

  const navigateToForm = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    setShowStatus(true);

    const rollNumber = event.target.roll_number.value;

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("http://127.0.0.1:8000/spacs/mcm_show/", {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roll_number: rollNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Received Data:", data);
        setApplications(data);
      } else {
        console.log("Error: " + response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    setShowStatus(true);

    const rollNumber = event.target.roll_number.value;

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("http://127.0.0.1:8000/spacs/directorgold_show/", {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roll_number: rollNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Received Data:", data);
        setApplications(data);
      } else {
        console.log("Error: " + response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };


  const handleSubmit3 = async (event) => {
    event.preventDefault();
    setShowStatus(true);

    const rollNumber = event.target.roll_number.value;

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("http://127.0.0.1:8000/spacs/directorsilver_show/", {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roll_number: rollNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Received Data:", data);
        setApplications(data);
      } else {
        console.log("Error: " + response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };


  const handleSubmit4 = async (event) => {
    event.preventDefault();
    setShowStatus(true);

    const rollNumber = event.target.roll_number.value;

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("http://127.0.0.1:8000/spacs/proficiencydm_show/", {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roll_number: rollNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Received Data:", data);
        setApplications(data);
      } else {
        console.log("Error: " + response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>View Application Status</h2>
      <div className={styles.underline1} />

      {page === 1 && (
        <div className={styles.scholarshipContainer}>
          <div className={styles.scholarshipName}>
            Merit-Cum-Means Scholarship
          </div>
          <button className={styles.checkStatusButton} onClick={() => navigateToForm(2)}>
            Check Status
          </button>
          <div className={styles.underline} />
          <div className={styles.scholarshipName}>
            Director's Gold Medal
          </div>
          <button className={styles.checkStatusButton} onClick={() => navigateToForm(3)}>
            Check Status
          </button>
          <div className={styles.underline} />
          <div className={styles.scholarshipName}>
            Director's Silver Medal
          </div>
          <button className={styles.checkStatusButton} onClick={() => navigateToForm(4)}>
            Check Status
          </button>
          <div className={styles.underline} />
          <div className={styles.scholarshipName}>
            D&M Proficiency Gold Medal
          </div>
          <button className={styles.checkStatusButton} onClick={() => navigateToForm(5)}>
            Check Status
          </button>
        </div>
      )}

      {page === 2 && (
        <div className={styles.formContainer}>
          <h3 className={styles.scholarshipName}>Merit-Cum-Means Scholarship</h3>
          {!showStatus ? (
            <form className={styles.form} onSubmit={handleSubmit1}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.inputField}
                  type="text"
                  name="roll_number"
                  placeholder="Roll Number"
                  required
                />
              </div>
              <button type="submit" className={styles.checkStatusButton}>
                Check Status
              </button>
            </form>
          ) : (
            <div className={styles.applicationsList}>
              <h4>Application Status</h4>
              <div className={styles.tableContainer}>
                <Table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Application ID:</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((winner, index) => (
                      <tr key={index}>
                        <td>{winner.id}</td>
                        <td>{winner.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              {applications.length === 0 && (
                <h3>no application found</h3>
              )}
            </div>
          )}
        </div>
      )}

      {page === 3 && (
        <div className={styles.formContainer}>
          <h3 className={styles.scholarshipName}>Director's Gold Medal</h3>
          {!showStatus ? (
            <form className={styles.form} onSubmit={handleSubmit2}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.inputField}
                  type="text"
                  name="roll_number"
                  placeholder="Roll Number"
                  required
                />
              </div>
              <button type="submit" className={styles.checkStatusButton}>
                Check Status
              </button>
            </form>
          ) : (
            <div className={styles.applicationsList}>
              <h4>Application Status</h4>
              <div className={styles.tableContainer}>
                <Table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Application ID:</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((winner, index) => (
                      <tr key={index}>
                        <td>{winner.id}</td>
                        <td>{winner.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              {applications.length === 0 && (
                <h3>no application found</h3>
              )}
            </div>
          )}
        </div>
      )}

      {page === 4 && (
        <div className={styles.formContainer}>
          <h3 className={styles.scholarshipName}>Director's Silver Medal</h3>
          {!showStatus ? (
            <form className={styles.form} onSubmit={handleSubmit3}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.inputField}
                  type="text"
                  name="roll_number"
                  placeholder="Roll Number"
                  required
                />
              </div>
              <button type="submit" className={styles.checkStatusButton}>
                Check Status
              </button>
            </form>
          ) : (
            <div className={styles.applicationsList}>
              <h4>Application Status</h4>
              <div className={styles.tableContainer}>
                <Table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Application ID:</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((winner, index) => (
                      <tr key={index}>
                        <td>{winner.id}</td>
                        <td>{winner.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              {applications.length === 0 && (
                <h3>no application found</h3>
              )}
            </div>
          )}
        </div>
      )}

      {page === 5 && (
        <div className={styles.formContainer}>
          <h3 className={styles.scholarshipName}>D&M Proficiency Gold Medal</h3>
          {!showStatus ? (
            <form className={styles.form} onSubmit={handleSubmit4}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.inputField}
                  type="text"
                  name="roll_number"
                  placeholder="Roll Number"
                  required
                />
              </div>
              <button type="submit" className={styles.checkStatusButton}>
                Check Status
              </button>
            </form>
          ) : (
            <div className={styles.applicationsList}>
              <h4>Application Status</h4>
              <div className={styles.tableContainer}>
                <Table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Application ID:</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((winner, index) => (
                      <tr key={index}>
                        <td>{winner.id}</td>
                        <td>{winner.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              {applications.length === 0 && (
                <h3>no application found</h3>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ScholarshipStatus;
