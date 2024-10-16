import React, { useState } from "react";
import { List, Text, Title, Divider, Container } from "@mantine/core";
import styles from "./CatalogC.module.css";

function AwardsAndScholarshipCatalog() {
  const [desc, setDesc] = useState(1); // Track which section is selected
  const [editStates, setEditStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  // Handle section change
  const changeDesc = (value) => setDesc(value);

  // Toggle edit state for a specific section
  const toggleEdit = (section) => {
    setEditStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderContent = (section, title, defaultText) => (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title order={2}>{title}</Title>
        <button
          className={styles.editButton}
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => toggleEdit(section)}
        >
          {editStates[section] ? "Save" : "Edit"}
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
            `4.1 or 3.1.4.2 
as well as means criterion (Section 2.2.) 3.1.3.2 A holder of any other scholarship from any other source shall not be eligible to apply for the MCM Scholarship unless the same is surrendered. 3.1.3.3 On the commencement of each academic year, the Convener, SPACS shall invite applications for the award of MCM Scholarships from students of all years except those of first year...`,
          )}
        {desc === 2 &&
          renderContent(
            2,
            "DSM Proficiency Gold Medal",
            `4.3 D&M Proficiency Gold Medals 
4.3.1 Design and Manufacturing Proficiency Gold Medals are awarded at the time of Institute’s Convocation to students excelling in their respective fields...`,
          )}
        {desc === 3 &&
          renderContent(
            3,
            "Director’s Gold Medal",
            `4.2 Director's Gold Medals 
4.2.1 Director's Gold Medals (DGMs), presented at the Institute Convocation every year, are awarded to the best-performing students across various departments...`,
          )}
        {desc === 4 &&
          renderContent(
            4,
            "Director’s Silver Medal",
            `4.6 Director's Silver Medals 
4.6.1 Director's Silver Medals (DSMs) are presented at the Institute’s Convocation to the students achieving second-best performance in their respective fields...`,
          )}
        {desc === 5 &&
          renderContent(
            5,
            "Notional Prices",
            `4.7 Notional Prizes and Certificates of Merit 
4.7.1 Notional Prizes and Certificates of Merit are awarded to 7 percent of the students of each undergraduate and postgraduate batch, recognizing their academic excellence...`,
          )}
      </div>
    </Container>
  );
}

export default AwardsAndScholarshipCatalog;
