import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  TextInput,
  Textarea,
  Select,
  Group,
  Title,
} from "@mantine/core";
import Header from "./Header";

export default function DirectorSilver() {
  const [formData, setFormData] = useState({
    award: "Director's Silver Medal",
    hallNo: "",
    roomNo: "A-302",
    type: "",
    fatherName: "",
    motherName: "",
    permanentAddress: "",
    correspondenceAddress: "",
    policeStation: "",
    railwayStation: "",
    financialAssistance: "",
    totalAmount: "",
    achievementInside: "",
    achievementOutside: "",
    pbiProject: "", // For D&M Proficiency Gold Medal
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Add any validation or data processing logic here before navigating
    navigate("/DocumentUploadForm2"); // Navigate to the next page, change '/nextPage' to your desired route
  };

  return (
    <>
      <div style={{ marginLeft: "-173px" }}>
        <Header />
      </div>
      <Container size="lg" style={{ marginTop: "-40px" }}>
        <Title order={2} mb="md">
          Award Registration Form
        </Title>

        <form onSubmit={handleNext}>
          <Grid gutter="lg">
            {/* Award Selection */}
            <Grid.Col xs={12} sm={6}>
              <Select
                label="Award"
                name="award"
                value={formData.award}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, award: value }))
                }
                data={[
                  {
                    value: "Director's Silver Medal",
                    label: "Director's Silver Medal",
                  },
                  {
                    value: "Director's Gold Medal",
                    label: "Director's Gold Medal",
                  },
                  {
                    value: "D&M Proficiency Gold Medal",
                    label: "D&M Proficiency Gold Medal",
                  },
                ]}
              />
            </Grid.Col>

            {/* Hall and Room Numbers */}
            <Grid.Col xs={6} sm={3}>
              <TextInput
                label="Hall No"
                name="hallNo"
                value={formData.hallNo}
                onChange={handleChange}
                placeholder="0"
              />
            </Grid.Col>

            <Grid.Col xs={6} sm={3}>
              <TextInput
                label="Room No"
                name="roomNo"
                value={formData.roomNo}
                onChange={handleChange}
                placeholder="A-302"
              />
            </Grid.Col>

            {/* Parent Names */}
            <Grid.Col xs={12} sm={6}>
              <TextInput
                label="Father's Name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Father's Name"
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <TextInput
                label="Mother's Name"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Mother's Name"
              />
            </Grid.Col>

            {/* Addresses */}
            <Grid.Col xs={12} sm={6}>
              <Textarea
                label="Permanent Address"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                placeholder="Enter permanent address"
                minRows={3}
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <Textarea
                label="Correspondence Address"
                name="correspondenceAddress"
                value={formData.correspondenceAddress}
                onChange={handleChange}
                placeholder="Enter correspondence address"
                minRows={3}
              />
            </Grid.Col>

            {/* Nearest Stations */}
            <Grid.Col xs={12} sm={6}>
              <TextInput
                label="Nearest Police Station"
                name="policeStation"
                value={formData.policeStation}
                onChange={handleChange}
                placeholder="Police Station"
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <TextInput
                label="Nearest Railway Station"
                name="railwayStation"
                value={formData.railwayStation}
                onChange={handleChange}
                placeholder="Railway Station"
              />
            </Grid.Col>

            {/* Financial Details */}
            <Grid.Col xs={12} sm={6}>
              <Textarea
                label="Financial Assistance"
                name="financialAssistance"
                value={formData.financialAssistance}
                onChange={handleChange}
                placeholder="Enter financial assistance details"
                minRows={3}
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <TextInput
                label="Grand Total Amount"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleChange}
                placeholder="Total"
              />
            </Grid.Col>

            {/* Achievements - Conditionally Rendered */}
            {formData.award === "Director's Gold Medal" && (
              <Grid.Col xs={12}>
                <Textarea
                  label="Brief Description of Academic Achievement"
                  name="achievementInside"
                  value={formData.achievementInside}
                  onChange={handleChange}
                  placeholder="Enter academic achievements"
                  minRows={3}
                />
              </Grid.Col>
            )}

            {formData.award === "D&M Proficiency Gold Medal" && (
              <Grid.Col xs={12}>
                <TextInput
                  label="PBI Project/Design Project"
                  name="pbiProject"
                  value={formData.pbiProject}
                  onChange={handleChange}
                  placeholder="Enter PBI Project details"
                />
              </Grid.Col>
            )}

            {formData.award === "Director's Silver Medal" && (
              <>
                <Grid.Col xs={12}>
                  <Textarea
                    label="Brief Description of Games and Sports/Cultural Achievement: (Inside IIITDMJ)"
                    name="achievementInside"
                    value={formData.achievementInside}
                    onChange={handleChange}
                    placeholder="Enter achievements inside IIITDMJ"
                    minRows={3}
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <Textarea
                    label="Brief Description of Games and Sports/Cultural Achievement: (Outside IIITDMJ)"
                    name="achievementOutside"
                    value={formData.achievementOutside}
                    onChange={handleChange}
                    placeholder="Enter achievements outside IIITDMJ"
                    minRows={3}
                  />
                </Grid.Col>
              </>
            )}
          </Grid>

          <Group position="right" mt="md">
            <Button onClick={handleNext} color="blue">
              Next
            </Button>
          </Group>
        </form>
      </Container>
    </>
  );
}
