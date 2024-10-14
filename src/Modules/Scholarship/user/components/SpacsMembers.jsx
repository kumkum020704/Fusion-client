import React from "react";
import styles from "./SpacsMembers.module.css";
import conv from "../images/convener.png";
import assi from "../images/assistant.png";

function SpacsMembers() {
  return (
    <div>
      <h3 className={styles.heading}>About</h3>

      <div className={styles.membersContainer}>
        <div className={styles.memberCard}>
          <h1 className={styles.cardHeading}>SPACS Convenor</h1>
          <img src={conv} alt="img" />
          <p>Atul Gupta</p>
          <p>Phone: +91 12345 67890</p>
          <p>Email: convenor@gmail.com</p>
        </div>

        <div className={`${styles.memberCard} ${styles.assistantCard}`}>
          <h1 className={styles.cardHeading}>SPACS Assistant</h1>
          <img src={assi} alt="img" />
          <p>RMishra</p>
          <p>Phone: +91 12345 67890</p>
          <p>Email: staff@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default SpacsMembers;
