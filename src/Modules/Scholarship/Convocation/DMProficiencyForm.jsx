import React, { useState } from "react";
import {
  Button,
  TextInput,
  Grid,
  Textarea,
  FileButton,
  Group,
  Container,
  Paper,
  Title,
  Box,
} from "@mantine/core";

export default function DMProficiencyForm() {
  const [formData, setFormData] = useState({
    award_type: "DMProficiencyform",
    award_id: "",
    student: "",
    date: "",
    justification: "",
    correspondence_address: "",
    status: "",
    nearest_policestation: "",
    nearest_railwaystation: "",
    financial_assistance: "",
    grand_total: "",
    title_name: "",
    no_of_students: "",
    roll_no_1: "",
    roll_no_2: "",
    roll_no_3: "",
    roll_no_4: "",
    roll_no_5: "",
    brief_description: "",
    cse_topic: "",
    ece_topic: "",
    mech_topic: "",
    design_topic: "",
    cse_percentage: "",
    ece_percentage: "",
    mech_percentage: "",
    design_percentage: "",
    Marksheet: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (file) => {
    setFormData((prev) => ({ ...prev, Marksheet: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        if (key === "Marksheet") {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
    }

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("User is not authenticated. Please log in.");
        return;
      }

      const response = await fetch(
        "http://127.0.0.1:8000/spacs/proficiencydm_update/",
        {
          method: "POST",
          body: formDataToSend,
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        alert("Form submitted successfully!");
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        alert(
          `Failed to submit the form: ${errorData.detail || response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <Container size="lg">
      <Paper radius="md" padding="sm">
        <Title
          order={2}
          mb="lg"
          sx={(theme) => ({
            fontSize: theme.fontSizes.lg,
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              fontSize: theme.fontSizes.md,
            },
          })}
        >
          DM Proficiency Form
        </Title>
        <form onSubmit={handleSubmit}>
          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Award ID"
                name="award_id"
                type="number"
                value={formData.award_id}
                onChange={handleChange}
                placeholder="Enter Award ID"
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Student ID"
                name="student"
                value={formData.student}
                onChange={handleChange}
                placeholder="Enter Student ID"
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Enter Status"
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Textarea
                label="Justification"
                name="justification"
                value={formData.justification}
                onChange={handleChange}
                placeholder="Enter Justification"
                minRows={3}
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Textarea
                label="Correspondence Address"
                name="correspondence_address"
                value={formData.correspondence_address}
                onChange={handleChange}
                placeholder="Enter Correspondence Address"
                minRows={3}
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Nearest Police Station"
                name="nearest_policestation"
                value={formData.nearest_policestation}
                onChange={handleChange}
                placeholder="Enter Nearest Police Station"
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Nearest Railway Station"
                name="nearest_railwaystation"
                value={formData.nearest_railwaystation}
                onChange={handleChange}
                placeholder="Enter Nearest Railway Station"
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Financial Assistance"
                name="financial_assistance"
                value={formData.financial_assistance}
                onChange={handleChange}
                placeholder="Enter Financial Assistance"
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Grand Total"
                name="grand_total"
                type="number"
                value={formData.grand_total}
                onChange={handleChange}
                placeholder="Enter Grand Total"
                size="md"
                style={{ marginBottom: "1rem" }}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <FileButton onChange={handleFileUpload} accept="application/pdf">
                {(props) => (
                  <Button {...props} fullWidth size="md">
                    Upload Marksheet (PDF)
                  </Button>
                )}
              </FileButton>
              {formData.Marksheet && formData.Marksheet.name && (
                <TextInput
                  value={formData.Marksheet.name}
                  readOnly
                  mt="sm"
                  label="Uploaded File"
                  size="md"
                  style={{ marginBottom: "1rem" }}
                />
              )}
            </Grid.Col>
          </Grid>

          <Group position="right" mt="xl">
            <Button type="submit" color="blue" size="md">
              Submit
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

// dm proficiency form