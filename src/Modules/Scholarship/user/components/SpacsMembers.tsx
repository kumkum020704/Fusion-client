import React from "react";
import styles from "./SpacsMembers.module.css";
import conv from '../images/convener.png'
import assi from '../images/assistant.png'

const SpacsMembers = () => {
  return (
    <div>
      <h3 className={styles.heading}>About</h3>

      <div className={styles.membersContainer}>
        <div className={styles.memberCard}>
          <h1 className={styles.cardHeading}>SPACS Convenor</h1>
          <img src={conv} alt="img"/>
          <p>Atul Gupta</p>
          <p>Phone</p>
          <p>Email</p>
        </div>

        <div className={`${styles.memberCard} ${styles.assistantCard}`}>
          <h1 className={styles.cardHeading}>SPACS Assistant</h1>
          <img src={assi} alt="img"/>
          <p>Atul Gupta</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
};

export default SpacsMembers;
