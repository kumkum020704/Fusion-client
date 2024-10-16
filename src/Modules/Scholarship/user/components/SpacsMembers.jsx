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
          <img src={conv} className={styles.memb} alt="img" />
          <p>Atul Gupta</p>
          <p>
            Phone: <span> 123-456-7890</span>
          </p>
          <p>
            Email: <span>convenor@example.com</span>
          </p>
        </div>

        <div className={`${styles.memberCard} ${styles.assistantCard}`}>
          <h1 className={styles.cardHeading}>SPACS Assistant</h1>
          <img src={assi} className={styles.memb} alt="img" />
          <p>RMishra</p>

          <p>
            Phone: <span>123-456-7890</span>
          </p>
          <p>
            Email: <span>staff@example.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpacsMembers;
