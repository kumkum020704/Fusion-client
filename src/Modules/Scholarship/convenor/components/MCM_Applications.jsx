/* eslint-disable */
import React, { useState } from "react";
import { Table, Button } from "@mantine/core";
import styles from "./MCM_applications.module.css";
import Medal_applications from "./medal_applications";

function MCM_Applications() {
  const [activeTab, setActiveTab] = useState("MCM");

  const applications = [
    { roll: "2017013", category: "GEN", income: "1413", cpi: "9.5" },
    { roll: "2017027", category: "GEN", income: "678", cpi: "9.5" },
    { roll: "2017120", category: "GEN", income: "2691701", cpi: "9.5" },
    { roll: "2017121", category: "GEN", income: "15", cpi: "9.5" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.whiteBox}>
        <div className={styles.tabs}>
          <div
            role="button"
            tabIndex={0}
            className={activeTab === "MCM" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("MCM")}
            style={{
              borderBottom: activeTab === "MCM" ? "4px solid #1e90ff" : "none",
              color: activeTab === "MCM" ? "#1e90ff" : "#000",
            }}
          >
            Merit-cum-Means Scholarship
          </div>

          <div
            role="button"
            tabIndex={0}
            className={activeTab === "Medals" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("Medals")}
            style={{
              borderBottom:
                activeTab === "Medals" ? "4px solid #1e90ff" : "none",
              color: activeTab === "Medals" ? "#1e90ff" : "#000",
            }}
          >
            Convocation Medals
          </div>
        </div>

        {activeTab === "MCM" && (
          <>
            <h2>Merit-cum-Means Scholarship</h2>
            <Table className={styles.table}>
              <thead>
                <tr>
                  <th>Roll</th>
                  <th>Category</th>
                  <th>Income</th>
                  <th>CPI</th>
                  <th>File</th>
                  <th>Accept</th>
                  <th>Reject</th>
                  <th>Under Review</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr key={index}>
                    <td>{app.roll}</td>
                    <td>{app.category}</td>
                    <td>{app.income}</td>
                    <td>{app.cpi}</td>
                    <td>
                      <Button color="blue">Files</Button>
                    </td>
                    <td>
                      <Button color="green">Accept</Button>
                    </td>
                    <td>
                      <Button color="red">Reject</Button>
                    </td>
                    <td>
                      <Button color="grey">Under Review</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}

        {activeTab === "Medals" && <Medal_applications />}
      </div>
    </div>
  );
}

export default MCM_Applications;
