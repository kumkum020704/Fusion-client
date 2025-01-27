/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Table, Button } from "@mantine/core";
import styles from "./MCM_applications.module.css";
import Medal_applications from "./medal_applications";

function MCM_Applications() {
  const [activeTab, setActiveTab] = useState("MCM");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch scholarship details from the API
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("Authentication token not found");
        }

        const response = await fetch(
          "http://127.0.0.1:8000/spacs/scholarship-details/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setApplications(data); // Assuming data is an array of application objects
        console.log(data[0]); // Correctly logging after setting applications
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch scholarship details:", error);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

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
            {loading ? (
              <p>Loading applications...</p>
            ) : (
              <Table className={styles.table}>
                <thead>
                  <tr>
                    <th>Roll</th>
                    <th>Income</th>
                    <th>File</th>
                    <th>Accept</th>
                    <th>Reject</th>
                    <th>Under Review</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, index) => (
                    <tr key={index}>
                      <td>{app.student}</td>
                      <td>{app.annual_income}</td>
                      <td>
                        <Button variant="light" color="blue">
                          Files
                        </Button>
                      </td>
                      <td>
                        <Button variant="filled" color="green">
                          Accept
                        </Button>
                      </td>
                      <td>
                        <Button variant="filled" color="red">
                          Reject
                        </Button>
                      </td>
                      <td>
                        <Button variant="outline" color="gray">
                          Under Review
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </>
        )}

        {activeTab === "Medals" && <Medal_applications />}
      </div>
    </div>
  );
}

export default MCM_Applications;
