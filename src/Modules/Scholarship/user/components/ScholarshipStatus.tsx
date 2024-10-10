import React, { useState } from "react";
import styles from "./ScholarshipStatus.module.css";

const ScholarshipStatus = () => {
  const [desc, setDesc] = useState(1);

  const changeDesc = (event) => {
    event.preventDefault(); // Prevents page reload
    setDesc(event.target.value);
  };

  return (
    <div>
      {desc == 1 && (
        <div className={styles.container}>
          <div className={styles.boldText}>Merit-Cum-Means Scholarship</div>
          <button
            className={styles.submitButton}
            value={2}
            onClick={changeDesc}
          >
            Submit
          </button>
        </div>
      )}
      {desc == 2 && (
        <div className={styles.formContainer}>
          <div className={styles.boldText}>Merit-Cum-Means Scholarship</div>
          <form className={styles.form}>
            <div>
              <label className={styles.radioLabel}>
                <input type="radio" name="applicationType" value="fresh" />
                Fresh
              </label>

              <label className={styles.radioLabel}>
                <input type="radio" name="applicationType" value="renewal" />
                Renewal
              </label>
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputContainer}>
                <label htmlFor="academicYear">Select Academic Year</label>
                <br></br>
                <input
                  id="academicYear"
                  className={styles.inputField}
                  type="text"
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="applicationId">Application Id</label>
                <br></br>
                <input
                  id="applicationId"
                  className={styles.inputField}
                  type="text"
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <br></br>
                <input
                  id="password"
                  className={styles.inputField}
                  type="password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={styles.submitFormButton}
              value={3}
              onClick={changeDesc}
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {desc == 3 && (
        <div className={styles.form}>
          <div className={styles.boldText}>Merit-Cum-Means Scholarship</div>
          <div className={styles.statusMessage}>Application is under review</div>
        </div>
      )}
    </div>
  );
};

export default ScholarshipStatus;
