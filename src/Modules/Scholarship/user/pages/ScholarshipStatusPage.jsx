import React, { useState } from "react";
import styles from "./ScholarshipStatusPage.module.css"; // Import CSS module
import ScholarshipStatus from "../components/ScholarshipStatus";
import UserBreadcumbs from "../components/UserBreadcumbs";

const ScholarStatusPage = () => {
  const [desc, setDesc] = useState(1);

  const changeDesc = (event) => {
    setDesc(event.target.value);
  };

  return (
    <>
      <UserBreadcumbs></UserBreadcumbs>
      <div className={styles.pageContainer}>
        <div className={styles.gridContainer}>
          <button onClick={changeDesc} value={1}>
            View Application Status
          </button>
        </div>
        <div className={styles.progressBarContainer}>
          <button
            onClick={changeDesc}
            value={1}
            className={`${styles.progressButton} ${desc == 1 ? styles.active : styles.inactive}`}
          ></button>
        </div>
        <hr />
        {desc == 1 && <ScholarshipStatus />}
      </div>
    </>
  );
};

export default ScholarStatusPage;
