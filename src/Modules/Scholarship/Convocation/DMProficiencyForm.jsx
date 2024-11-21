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

  return (
    <Container size="lg">
      <Paper radius="md" padding="sm">
        <Title order={2} mb="lg">
          DM Proficiency Form
        </Title>
        <form >
          <Grid gutter="lg">
            {/* Basic Information */}
            <Grid.Col span={6}>
              <TextInput
                label="Award ID"
                name="award_id"
                type="number"
                value={formData.award_id}
                onChange={handleChange}
                placeholder="Enter Award ID"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Student ID"
                name="student"
                value={formData.student}
                onChange={handleChange}
                placeholder="Enter Student ID"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Enter Status"
              />
            </Grid.Col>

            {/* Addresses */}
            <Grid.Col span={12}>
              <Textarea
                label="Justification"
                name="justification"
                value={formData.justification}
                onChange={handleChange}
                placeholder="Enter Justification"
                minRows={3}
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
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Nearest Police Station"
                name="nearest_policestation"
                value={formData.nearest_policestation}
                onChange={handleChange}
                placeholder="Enter Nearest Police Station"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Nearest Railway Station"
                name="nearest_railwaystation"
                value={formData.nearest_railwaystation}
                onChange={handleChange}
                placeholder="Enter Nearest Railway Station"
              />
            </Grid.Col>

            {/* Financial Information */}
            <Grid.Col span={6}>
              <TextInput
                label="Financial Assistance"
                name="financial_assistance"
                value={formData.financial_assistance}
                onChange={handleChange}
                placeholder="Enter Financial Assistance"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Grand Total"
                name="grand_total"
                type="number"
                value={formData.grand_total}
                onChange={handleChange}
                placeholder="Enter Grand Total"
              />
            </Grid.Col>

            {/* Project/Team Information */}
            <Grid.Col span={6}>
              <TextInput
                label="Title Name"
                name="title_name"
                value={formData.title_name}
                onChange={handleChange}
                placeholder="Enter Title Name"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Number of Students"
                name="no_of_students"
                type="number"
                value={formData.no_of_students}
                onChange={handleChange}
                placeholder="Enter Number of Students"
              />
            </Grid.Col>
            {[1, 2, 3, 4, 5].map((num) => (
              <Grid.Col span={6} >
                <TextInput
                  label={`Roll No ${num}`}
                  name={`roll_no_${num}`}
                  onChange={handleChange}
                  placeholder="Enter roll no"
                />
              </Grid.Col>
            ))}

            {/* Brief Description */}
            <Grid.Col span={12}>
              <Textarea
                label="Brief Description"
                name="brief_description"
                value={formData.brief_description}
                onChange={handleChange}
                placeholder="Enter a brief description"
                minRows={4}
              />
            </Grid.Col>

            {/* Disciplines */}
            {["cse", "ece", "mech", "design"].map((field) => (
              <React.Fragment key={field}>
                <Grid.Col span={6}>
                  <TextInput
                    label={`${field.toUpperCase()} Topic`}
                    name={`${field}_topic`}
                    onChange={handleChange}
                    placeholder={`Enter ${field.toUpperCase()} Topic`}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label={`${field.toUpperCase()} Percentage`}
                    name={`${field}_percentage`}
                    type="number"
                    value={`formData[${field}_percentage]`}
                    onChange={handleChange}
                    placeholder={`Enter ${field.toUpperCase()} Percentage`}
                  />
                </Grid.Col>
              </React.Fragment>
            ))}

            {/* File Upload */}
            <Grid.Col span={12}>
              <FileButton onChange={handleFileUpload} accept="application/pdf">
                {(props) => (
                  <Button {...props} fullWidth>
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
    </Container >
  );
}