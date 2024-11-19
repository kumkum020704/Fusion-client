/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import AwardsAndScholarshipCatalog from "../components/AwardsAndScholarshipCatalogC";
import SpacsMembers from "../components/spacsMembersC";
import PreviousWinners from "../components/previousWinnerC";
import styles from "./Convenor.module.css";

function CatalogPage() {
  const [desc, setDesc] = useState(1);

  const changeDesc = (event) => {
    setDesc(parseInt(event.target.value, 10));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonContainer}>
        <button
          onClick={changeDesc}
          value={1}
          className={`${styles.button} ${desc === 1 ? styles.activeButton : ""}`}
        >
          Awards and Scholarship Catalogue
        </button>
        <button
          onClick={changeDesc}
          value={2}
          className={`${styles.button} ${desc === 2 ? styles.activeButton : ""}`}
        >
          SPACS Members and details
        </button>
        <button
          onClick={changeDesc}
          value={3}
          className={`${styles.button} ${desc === 3 ? styles.activeButton : ""}`}
        >
          Previous Winners
        </button>
      </div>

      {/* Line below the active button */}
      <div className={styles.lineContainer}>
        <div
          className={`${styles.line} ${desc === 1 ? styles.activeLine : ""}`}
        />
        <div
          className={`${styles.line} ${desc === 2 ? styles.activeLine : ""}`}
        />
        <div
          className={`${styles.line} ${desc === 3 ? styles.activeLine : ""}`}
        />
      </div>

      <hr className={styles.hr} />

      {desc === 1 && <AwardsAndScholarshipCatalog />}
      {desc === 2 && <SpacsMembers />}
      {desc === 3 && <PreviousWinners />}
    </div>
  );
}

export default CatalogPage;
