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

export default function DirectorSilverForm() {
  const [formData, setFormData] = useState({
    award_type: "Director's Silver Medal",
    Marksheet: null,
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
    inside_achievements: "",
    outside_achievements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file) => {
    setFormData((prev) => ({ ...prev, Marksheet: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        if (key === "Marksheet") {
          formDataToSend.append(key, formData[key]); // Append the file directly
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
        "http://127.0.0.1:8000/spacs/directorsilver_update/",
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
      <Paper radius="md" p="sm">
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
          Director's Silver Medal Application Form
        </Title>
        <form onSubmit={handleSubmit}>
          <Grid gutter="lg">
            {/* Basic Information */}
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Award ID"
                name="award_id"
                type="number"
                value={formData.award_id}
                onChange={handleChange}
                placeholder="Enter Award ID"
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Student ID"
                name="student"
                type="text"
                value={formData.student}
                onChange={handleChange}
                placeholder="Enter Student ID"
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Enter Status"
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Nearest Police Station"
                name="nearest_policestation"
                value={formData.nearest_policestation}
                onChange={handleChange}
                placeholder="Enter Nearest Police Station"
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Nearest Railway Station"
                name="nearest_railwaystation"
                value={formData.nearest_railwaystation}
                onChange={handleChange}
                placeholder="Enter Nearest Railway Station"
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Grand Total Amount"
                name="grand_total"
                type="number"
                value={formData.grand_total}
                onChange={handleChange}
                placeholder="Enter Grand Total Amount"
                sx={(theme) => ({
                  fontSize: "16px",
                })}
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
                sx={(theme) => ({
                  fontSize: "16px",
                })}
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
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Financial Assistance"
                name="financial_assistance"
                value={formData.financial_assistance}
                onChange={handleChange}
                placeholder="Describe Financial Assistance"
                minRows={3}
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Inside Achievements"
                name="inside_achievements"
                value={formData.inside_achievements}
                onChange={handleChange}
                placeholder="Enter Inside Achievements"
                minRows={3}
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Outside Achievements"
                name="outside_achievements"
                value={formData.outside_achievements}
                onChange={handleChange}
                placeholder="Enter Outside Achievements"
                minRows={3}
                sx={(theme) => ({
                  fontSize: "16px",
                })}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <FileButton onChange={handleFileChange} accept="application/pdf">
                {(props) => (
                  <Button {...props} fullWidth>
                    Upload Marksheet (PDF)
                  </Button>
                )}
              </FileButton>
              {formData.Marksheet && (
                <TextInput
                  value={formData.Marksheet.name}
                  readOnly
                  mt="sm"
                  label="Uploaded File"
                  sx={(theme) => ({
                    fontSize: "16px",
                  })}
                />
              )}
            </Grid.Col>
          </Grid>

          <Group position="right" mt="xl">
            <Button type="submit" color="blue">
              Submit
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

// director gold