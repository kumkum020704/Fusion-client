/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styles from "./ScholarshipStatus.module.css";

function ScholarshipStatus() {
  const [page, setPage] = useState(1);
  const [showStatus, setShowStatus] = useState(false);

  const navigateToForm = () => {
    setPage(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowStatus(true);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>View Application Status</h2>
      <div className={styles.underline} />

      {page === 1 && (
        <div className={styles.scholarshipContainer}>
          <div className={styles.scholarshipName}>
            Merit-Cum-Means Scholarship
          </div>
          <button className={styles.checkStatusButton} onClick={navigateToForm}>
            Check Status
          </button>
        </div>
      )}

      {page === 2 && (
        <div className={styles.formContainer}>
          <h3 className={styles.scholarshipName}>
            Merit-Cum-Means Scholarship
          </h3>
          {!showStatus ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="applicationType"
                    value="fresh"
                    defaultChecked
                  />
                  Fresh
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="applicationType" value="renewal" />
                  Renewal
                </label>
              </div>
              <div className={styles.inputContainer}>
                <select className={styles.select} defaultValue="" required>
                  <option value="" disabled>
                    Select Academic Year
                  </option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={styles.inputField}
                  type="text"
                  placeholder="Application ID"
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={styles.inputField}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className={styles.checkStatusButton}>
                Check Status
              </button>
            </form>
          ) : (
            <div className={styles.statusMessage}>
              Application is under review
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ScholarshipStatus;
