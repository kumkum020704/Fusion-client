/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./previousWinnersC.module.css";

function PreviousWinners() {
  return (
    <div className={styles.wrapper}>
      <form>
        <div className={styles.formRow}>
          {/* Programme Selection */}
          <div className={styles.formItem}>
            <label htmlFor="programme1" className={styles.label}>
              Programme
            </label>
            <div className={styles.selectContainer}>
              <select id="programme1" className={styles.select}>
                <option>B.Tech</option>
                <option>M.Tech</option>
                <option>B.Des</option>
                <option>M.Des</option>
                <option>PhD</option>
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
              <select id="academicProgramme" className={styles.select}>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
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
              <select id="programme2" className={styles.select}>
                <option>Director's Gold</option>
                <option>Director's Silver</option>
                <option>Merit-cum-means Scholarship</option>
                <option>Notional Prizes</option>
                <option>D&M Proficiency Gold Medal</option>
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
    </div>
  );
}

export default PreviousWinners;
