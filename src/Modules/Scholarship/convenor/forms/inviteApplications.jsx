/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styles from "./inviteApplications.module.css";

function InviteApplications() {
  const [formData, setFormData] = useState({
    type: "",
    programme: "",
    batch: "",
    startDate: "",
    endDate: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div className={styles.activeTab}>Invite Applications</div>
        <div>Recent invite applications</div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {/* Add options here */}
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="programme">Programme</label>
            <select
              id="programme"
              name="programme"
              value={formData.programme}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {/* Add options here */}
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="batch">Batch</label>
            <select
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {/* Add options here */}
            </select>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="startDate">Start date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="remarks">Remarks:</label>
          <textarea
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default InviteApplications;
