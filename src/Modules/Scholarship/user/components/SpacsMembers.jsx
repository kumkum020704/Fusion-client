import React from "react";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react"; // Import Phosphor icons
import styles from "./SpacsMembers.module.css";
import conv from "../images/convener.png";
import assi from "../images/assistant.png";

function SpacsMembers() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>About</h3>

      <div className={styles.membersContainer}>
        <div className={styles.memberCard}>
          <h1 className={styles.cardHeading}>SPACS Convenor</h1>
          <img src={conv} alt="SPACS Convenor" />
          <div className={styles.nameRole}>
            <h2 className={styles.name}>Atul Gupta</h2>
            <p className={styles.role}>Faculty</p>
          </div>
          <div className={styles.contactInfo}>
            <Phone size={24} weight="bold" className={styles.icon} />
            <p>
              <strong>Phone:</strong> +91 12345 67890
            </p>
          </div>
          <div className={styles.contactInfo}>
            <EnvelopeSimple size={24} weight="bold" className={styles.icon} />
            <p>
              <strong>Email:</strong> convenor@gmail.com
            </p>
          </div>
        </div>

        <div className={`${styles.memberCard} ${styles.assistantCard}`}>
          <h1 className={styles.cardHeading}>SPACS Assistant</h1>
          <img src={assi} alt="SPACS Assistant" />
          <div className={styles.nameRole}>
            <h2 className={styles.name}>RMishra</h2>
            <p className={styles.role}>Staff</p>
          </div>
          <div className={styles.contactInfo}>
            <Phone size={24} weight="bold" className={styles.icon} />
            <p>
              <strong>Phone:</strong> +91 12345 67890
            </p>
          </div>
          <div className={styles.contactInfo}>
            <EnvelopeSimple size={24} weight="bold" className={styles.icon} />
            <p>
              <strong>Email:</strong> staff@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpacsMembers;
