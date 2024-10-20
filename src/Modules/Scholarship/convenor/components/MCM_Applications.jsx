/* eslint-disable no-unused-vars */
import React from "react";
import { Table, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";
import styles from "./MCM_applications.module.css";
import ConvenorBreadcumbs from "./ConvenorBreadcumbs";

function MCM_Applications() {
  const applications = [
    { roll: "2017013", category: "GEN", income: "1413", cpi: "9.5" },
    { roll: "2017027", category: "GEN", income: "678", cpi: "9.5" },
    { roll: "2017120", category: "GEN", income: "2691701", cpi: "9.5" },
    { roll: "2017121", category: "GEN", income: "15", cpi: "9.5" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div className={styles.activeTab}>Merit-cum-Means Scholarship</div>
        <div>
          <NavLink
            to="/convenor/Medal_applications"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            Convocation Medals
          </NavLink>
        </div>
      </div>
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
                <Button color="blue">Accept</Button>
              </td>
              <td>
                <Button color="blue">Reject</Button>
              </td>
              <td>
                <Button color="blue">Under Review</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MCM_Applications;
