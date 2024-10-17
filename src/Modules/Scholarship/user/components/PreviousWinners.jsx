/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./PreviousWinners.module.css";

function PreviousWinners() {
  return (
    <div className={styles.wrapper}>
      <form>
        <div className={styles.formRow}>
          <div className={styles.formItem}>
            <label className={styles.label}>Programme</label>
            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <CaretDown className={styles.caretIcon} />
            </div>
          </div>
          <div className={styles.formItem}>
            <label className={styles.label}>Academic Programme</label>
            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <CaretDown className={styles.caretIcon} />
            </div>
          </div>
          <div className={styles.formItem}>
            <label className={styles.label}>Programme</label>
            <div className={styles.selectContainer}>
              <select className={styles.select}>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <CaretDown className={styles.caretIcon} />
            </div>
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
}

export default PreviousWinners;
