import React from "react";
import styles from './PreviousWinners.module.css';

const PreviousWinners = () => {
  return (
    <div className={styles.wrapper}>
      <form>
        <div className={styles.formRow}>
          <div className={styles.formItem}>
            <label htmlFor="programme1">Programme</label>
            <br />
            <select id="programme1" className={styles.select}>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="academicProgramme">Academic Programme</label>
            <br />
            <select id="academicProgramme" className={styles.select}>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="programme2">Programme</label>
            <br />
            <select id="programme2" className={styles.select}>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreviousWinners;
