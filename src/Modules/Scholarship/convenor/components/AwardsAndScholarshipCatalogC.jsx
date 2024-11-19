import React, { useState } from "react";
import { List, Text, Title, Divider, Container } from "@mantine/core";
import { Pencil } from "@phosphor-icons/react"; // Import the Pencil icon
import styles from "./CatalogC.module.css"; // Assuming you have this CSS file

function AwardsAndScholarshipCatalog() {
  const [desc, setDesc] = useState(1);
  const [editStates, setEditStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const changeDesc = (value) => {
    setDesc(value);
  };

  const toggleEdit = (section) => {
    setEditStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderContent = (section, title, defaultText) => (
    <>
      <div className={styles.header}>
        <Title order={2}>{title}</Title>
        <button
          className={styles.editButton}
          onClick={() => toggleEdit(section)}
        >
          {editStates[section] ? "Save" : "Edit"}
          <Pencil className={styles.pencilIcon} />
        </button>
      </div>
      <Divider my="sm" />
      {editStates[section] ? (
        <textarea className={styles.editTextarea} defaultValue={defaultText} />
      ) : (
        <Text>{defaultText}</Text>
      )}
    </>
  );

  return (
    <Container className={styles.wrapper}>
      <div className={styles.listContainer}>
        <List spacing="sm" size="lg">
          <List.Item
            onClick={() => changeDesc(1)}
            className={`${styles.listItem} ${desc === 1 ? styles.activeItem : ""}`}
          >
            Merit-Cum-Means
          </List.Item>
          <List.Item
            onClick={() => changeDesc(2)}
            className={`${styles.listItem} ${desc === 2 ? styles.activeItem : ""}`}
          >
            DSM Proficiency Gold Medal
          </List.Item>
          <List.Item
            onClick={() => changeDesc(3)}
            className={`${styles.listItem} ${desc === 3 ? styles.activeItem : ""}`}
          >
            Director’s Gold Medal
          </List.Item>
          <List.Item
            onClick={() => changeDesc(4)}
            className={`${styles.listItem} ${desc === 4 ? styles.activeItem : ""}`}
          >
            Director’s Silver Medal
          </List.Item>
          <List.Item
            onClick={() => changeDesc(5)}
            className={`${styles.listItem} ${desc === 5 ? styles.activeItem : ""}`}
          >
            Notional Prices
          </List.Item>
        </List>
      </div>

      <div className={styles.contentContainer}>
        {desc === 1 &&
          renderContent(
            1,
            "Merit-Cum-Means",
            `The MCM (Merit-Cum-Means) Scholarship is designed to support students from economically disadvantaged backgrounds while encouraging academic excellence. Eligibility Criteria: Candidates holding any other scholarship from a different source are not eligible to apply for the MCM Scholarship unless they surrender their existing scholarship. The Convener, SPACS will invite applications for the MCM Scholarship at the beginning of each academic year for students in all years except first-year students. Eligible candidates must apply using the prescribed format, available in this document, on the Institute’s website, and from the Academic Section. Completed applications, along with supporting documents specified in Annexures I through V, must be submitted before the deadline set by the Convener, SPACS. An income affidavit for the year preceding the application year must be submitted by the parent or guardian along with the completed application. First-year students may apply for the MCM Scholarship at the beginning of the second semester of their program. In cases where a student's financial circumstances change unexpectedly—such as the death or retirement of the earning parent(s)—and if unutilized MCM scholarships are available, the Convener, SPACS may accept applications at any time during the academic year. If awarded, the scholarship will take effect from the month the circumstances change. Award Duration and Conditions: For students other than first-year students, a minimum Cumulative Performance Index (CPI) of 6.0 for general category students and 5.5 for SC/ST category students is required at the end of the preceding academic year to qualify for the scholarship. First-year students must achieve a minimum Semester Performance Index (SPI) of 6.0 for general category students and 5.5 for SC/ST students at the end of their first semester. Each renewal of the MCM Scholarship requires fulfillment of both merit and means criteria as outlined in the relevant sections. Meeting the merit and means criteria does not guarantee the award of the scholarship. In cases where applications exceed available scholarships, the decision will depend on the financial liabilities of the applicants’ parents under current social conditions. Consequently, the minimum CPI/SPI requirements may be adjusted by SPACS based on the quality and quantity of applications from similar social backgrounds. The MCM Scholarship will be awarded for one year but may be renewed by SPACS upon submission of a new application in subsequent years. The total duration of the MCM Scholarship for a single student shall not exceed 45 months. Students on leave for a semester will not be eligible to receive the MCM Scholarship during that semester if awarded.`,
          )}
        {desc === 2 &&
          renderContent(
            2,
            "DSM Proficiency Gold Medal",
            `Design and Manufacturing Proficiency Gold Medals are awarded at the time of Institute’s Convocation for the best cross-disciplinary project from among the graduating BTech students and the best cross-disciplinary thesis from among the graduating MTech / MDes / PhD students.`,
          )}
        {desc === 3 &&
          renderContent(
            3,
            "Director’s Gold Medal",
            `Director's Gold Medals (DGMs), to be presented at the Institute Convocation every year, shall be awarded for the best all-round performance from among the graduating B Tech batch and M Tech/M Des/PhD students.`,
          )}
        {desc === 4 &&
          renderContent(
            4,
            "Director’s Silver Medal",
            `Director's Silver Medals (DSMs) shall be presented at the time of Institute’s Convocation for outstanding performance in Games & Sports and Cultural activities from among the graduating undergraduate and postgraduate students.`,
          )}
        {desc === 5 &&
          renderContent(
            5,
            "Notional Prices",
            `Notional Prices will be awarded at the time of Institute’s Convocation every year for the best BTPs/projects/thesis from among the graduating BTech and MTech/MDes/PhD students.`,
          )}
      </div>
    </Container>
  );
}

export default AwardsAndScholarshipCatalog;
