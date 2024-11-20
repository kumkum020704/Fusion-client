import React, { useState } from "react";
import { Tabs, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import AwardsAndScholarshipCatalog from "../components/AwardsAndScholarshipCatalogC";
import SpacsMembers from "../components/spacsMembersC";
import PreviousWinners from "../components/previousWinnerC";
import styles from "./Convenor.module.css";

function CatalogPage() {
  const [desc, setDesc] = useState(1); // 'desc' should be a number here

  const tabItems = [
    { value: 1, label: "Awards and Scholarship Catalogue" },
    { value: 2, label: "SPACS Members and details" },
    { value: 3, label: "Previous Winners" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonContainer}>
        {/* Left Caret */}
        <button
          onClick={() => setDesc(desc - 1 < 1 ? 3 : desc - 1)}
          className={styles.caretButton}
        >
          <CaretCircleLeft weight="light" size={32} />
        </button>

        {/* Tabs */}
        <Tabs
          value={desc.toString()}
          onTabChange={(value) => setDesc(Number(value))}
        >
          <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
            {tabItems.map((item) => (
              <Tabs.Tab
                key={item.value}
                value={item.value.toString()} // Ensure value is a string
                className={
                  desc === item.value ? styles.activeTab : styles.inactiveTab
                }
                style={{
                  textAlign: "center",
                  padding: "1rem 1.5rem", // Consistent padding
                  backgroundColor:
                    desc === item.value ? "#f0f8ff" : "transparent", // Light background for active tab
                }}
              >
                <NavLink
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: desc === item.value ? "#17abff" : "black", // Color change for active tab
                  }}
                >
                  <Text size="lg" weight={500}>
                    {item.label}
                  </Text>
                </NavLink>
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>

        {/* Right Caret */}
        <button
          onClick={() => setDesc(desc + 1 > 3 ? 1 : desc + 1)}
          className={styles.caretButton}
        >
          <CaretCircleRight weight="light" size={32} />
        </button>
      </div>

      {/* Progress Bar Line */}
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

      {/* Tab Content */}
      {desc === 1 && <AwardsAndScholarshipCatalog />}
      {desc === 2 && <SpacsMembers />}
      {desc === 3 && <PreviousWinners />}
    </div>
  );
}

export default CatalogPage;
