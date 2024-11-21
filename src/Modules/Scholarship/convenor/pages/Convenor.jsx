/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import AwardsAndScholarshipCatalog from "../components/AwardsAndScholarshipCatalogC";
// eslint-disable-next-line import/no-unresolved
import SpacsMembers from "../components/spacsMembersC";
// eslint-disable-next-line import/no-unresolved
import PreviousWinners from "../components/previousWinnerC";
import styles from "./Convenor.module.css";

function ConvenorPage() {
  const [desc, setDesc] = useState(1);

  const changeDesc = (event) => {
    setDesc(parseInt(event.target.value, 10));
  };

  return (
    <div className={styles.pageBackground}>
      <div className={styles.wrapper}>
        {/* Navigation Buttons */}
        <div className={styles.buttonContainer}>
          <button onClick={changeDesc} value={1} className={styles.button}>
            Awards and Scholarship Catalogue
          </button>
          <button onClick={changeDesc} value={2} className={styles.button}>
            SPACS Members and Details
          </button>
          <button onClick={changeDesc} value={3} className={styles.button}>
            Previous Winners
          </button>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <button
            onClick={changeDesc}
            value={1}
            aria-label="Navigate to Awards and Scholarship Catalogue"
            className={`${styles.progressButton} ${
              desc === 1 ? styles.activeProgress : styles.inactiveProgress
            }`}
          />
          <button
            onClick={changeDesc}
            value={2}
            aria-label="Navigate to SPACS Members and Details"
            className={`${styles.progressButton} ${
              desc === 2 ? styles.activeProgress : styles.inactiveProgress
            }`}
          />
          <button
            onClick={changeDesc}
            value={3}
            aria-label="Navigate to Previous Winners"
            className={`${styles.progressButton} ${
              desc === 3 ? styles.activeProgress : styles.inactiveProgress
            }`}
          />
        </div>

        {/* Content */}
        <div className={styles.whiteBox}>
          {desc === 1 && <AwardsAndScholarshipCatalog />}
          {desc === 2 && <SpacsMembers />}
          {desc === 3 && <PreviousWinners />}
        </div>
      </div>
    </div>
  );
}

export default ConvenorPage;
