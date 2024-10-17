/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./medal_applications.module.css";

function Medal_applications() {
  const [selectedAward, setSelectedAward] = useState("Director's Silver Medal");

  const medals = [
    { roll: "2017013", award: "Director's Silver Medal", cpi: "9.5" },
    { roll: "2017046", award: "Director's Silver Medal", cpi: "9.5" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div className={styles.tab}>
          <NavLink
            to="/convenor/MCM_application"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            Merit-cum-Means Scholarship
          </NavLink>
        </div>
        <div className={`${styles.tab} ${styles.activeTab}`}>
          Convocation Medals
        </div>
      </div>
      <h2 className={styles.title}>Convocation Medals</h2>
      <div className={styles.awardSelector}>
        <label htmlFor="award-select">Awards:</label>
        <select
          id="award-select"
          value={selectedAward}
          onChange={(e) => setSelectedAward(e.target.value)}
        >
          <option value="Director's Silver Medal">
            Director's Silver Medal
          </option>
        </select>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Roll</th>
            <th>Award</th>
            <th>CPI</th>
            <th>File</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {medals.map((medal, index) => (
            <tr key={index}>
              <td>{medal.roll}</td>
              <td>{medal.award}</td>
              <td>{medal.cpi}</td>
              <td>
                <button className={`${styles.button} ${styles.fileButton}`}>
                  Files
                </button>
              </td>
              <td>
                <button className={`${styles.button} ${styles.acceptButton}`}>
                  Accept
                </button>
              </td>
              <td>
                <button className={`${styles.button} ${styles.rejectButton}`}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Medal_applications;
