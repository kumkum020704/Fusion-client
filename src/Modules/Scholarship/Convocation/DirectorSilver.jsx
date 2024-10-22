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
    DirectorMedalID: "",
    AwardID: "",
    StudentID: "",
    type: "",
    Status: "",
    Date: "",
    Justification: "",
    correspondenceAddress: "",
    policeStation: "",
    railwayStation: "",
    financialAssistance: "",
    totalAmount: "",
    achievementInside: "",
    achievementOutside: "",
    Social: "",
    Corporate: "",
    HallActivities: "",
    GymkhanaActivities: "",
    InstituteActivities: "",
    CounsellingActivities: "",
    OtherActivities: "",
    TitleName: "",
    NumberofStudents: "",
    RollNumber1: "",
    RollNumber2: "",
    RollNumber3: "",
    RollNumber4: "",
    RollNumber5: "",
    BriefDiscription: "",
    ECETopic: "",
    CSETopic: "",
    MECHTopic: "",
    DesignTopic: "",
    ECEPercentage: "",
    CSEPercentage: "",
    MECHPercentage: "",
    DesignPercentage: "",
    ScienceInside:"",
    ScienceOutside:"",
    GamesInside:"",
    GamesOutside:"",
    CulturalInside:"",
    CulturalOutside:""
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

            <Grid.Col xs={6} sm={3}>
              <TextInput
                label="Director Medal ID"
                name="DirectorMedalID"
                type="number"
                value={formData.DirectorMedalID}
                onChange={handleChange}
                placeholder="DirectorMedalID"
              />
            </Grid.Col>

            <Grid.Col xs={6} sm={3}>
              <TextInput
                label="Award ID"
                name="AwardID"
                type="number"
                value={formData.AwardID}
                onChange={handleChange}
                placeholder="AwardID"
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <TextInput
                label="Student ID"
                name="StudentID"
                type="number"
                value={formData.StudentID}
                onChange={handleChange}
                placeholder="StudentID"
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <TextInput
                label="Date"
                name="Date"
                type="date"
                value={formData.Date}
                onChange={handleChange}
                placeholder="Date"
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <Textarea
                label="Justification"
                name="Justification"
                value={formData.Justification}
                onChange={handleChange}
                placeholder="Jusification"
                minRows={2}
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

            <Grid.Col xs={12} sm={6}>
              <TextInput
                label="Status"
                name="Status"
                value={formData.Status}
                onChange={handleChange}
                placeholder="Status"
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
                tupe="number"
                value={formData.totalAmount}
                onChange={handleChange}
                placeholder="Total"
              />
            </Grid.Col>

            {/* Achievements - Conditionally Rendered */}
            {formData.award === "Director's Gold Medal" && (
              <>
                <Grid.Col xs={12}>
                  <Textarea
                    label="Academic Achievements"
                    name="achievementInside"
                    value={formData.achievementInside}
                    onChange={handleChange}
                    placeholder="Enter academic achievements"
                    minRows={3}
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <Textarea
                    label="Social"
                    name="Social"
                    value={formData.Social}
                    onChange={handleChange}
                    placeholder="Social"
                    minRows={2}
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <Textarea
                    label="Corporate"
                    name="Corporate"
                    value={formData.Corporate}
                    onChange={handleChange}
                    placeholder="Corporate"
                    minRows={2}
                  />
                </Grid.Col>

                <Grid.Col xs={12} sm={3}>
                  <Textarea
                    label="Hall Activities"
                    name="HallActivities"
                    value={formData.HallActivities}
                    onChange={handleChange}
                    placeholder="Hall Activities"
                    minRows={2}
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <Textarea
                    label="Gymkhana Activities"
                    name="GymkhanaActivities"
                    value={formData.GymkhanaActivities}
                    onChange={handleChange}
                    placeholder="Gymkhana Activities"
                    minRows={2}
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <Textarea
                    label="Institute Activities"
                    name="InstituteActivities"
                    value={formData.InstituteActivities}
                    onChange={handleChange}
                    placeholder="Institute Activities"
                    minRows={2}
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <Textarea
                    label="Counselling Activities"
                    name="CounsellingActivities"
                    value={formData.CounsellingActivities}
                    onChange={handleChange}
                    placeholder="Counselling Activities"
                    minRows={2}
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <Textarea
                    label="Other Activities"
                    name="OtherActivities"
                    value={formData.OtherActivities}
                    onChange={handleChange}
                    placeholder="Other Activities"
                    minRows={2}
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <Textarea
                    label="Science Inside"
                    name="ScienceInside"
                    value={formData.ScienceInside}
                    onChange={handleChange}
                    placeholder="Enter Science Inside"
                    minRows={3}
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <Textarea
                    label="Science Outside "
                    name="ScienceOutside"
                    value={formData.ScienceOutside}
                    onChange={handleChange}
                    placeholder="Enter Science Outside "
                    minRows={3}
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <Textarea
                    label="Games Inside "
                    name="GamesInside"
                    value={formData.GamesInside}
                    onChange={handleChange}
                    placeholder="Enter Games Inside "
                    minRows={3}
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <Textarea
                    label="Games Outside "
                    name="GamesOutside"
                    value={formData.GamesOutside}
                    onChange={handleChange}
                    placeholder="Enter Games Outside "
                    minRows={3}
                  />
                </Grid.Col>  

                <Grid.Col xs={12}>
                  <Textarea
                    label="Cultural Inside "
                    name="CulturalInside"
                    value={formData.CulturalInside}
                    onChange={handleChange}
                    placeholder="Enter Cultural Inside "
                    minRows={3}
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <Textarea
                    label="Cultural Outside "
                    name="CulturalOutside"
                    value={formData.CulturalOutside}
                    onChange={handleChange}
                    placeholder="Enter Cultural Outside "
                    minRows={3}
                  />
                </Grid.Col>


              </>
            )}

            {formData.award === "D&M Proficiency Gold Medal" && (
              <>
                

                <Grid.Col xs={12}>
                  <TextInput
                    label="Title Name"
                    name="TitleName"
                    value={formData.TitleName}
                    onChange={handleChange}
                    placeholder="Title Name"
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <TextInput
                    label="Number of Students"
                    name="NumberofStudents"
                    type="number"
                    value={formData.NumberofStudents}
                    onChange={handleChange}
                    placeholder="Number of Students"
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <TextInput
                    label="RollNumber 1"
                    name="RollNumber1"
                    type="number"
                    value={formData.RollNumber1}
                    onChange={handleChange}
                    placeholder="Enter RollNumber"
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <TextInput
                    label="RollNumber 2"
                    name="RollNumber2"
                    type="number"
                    value={formData.RollNumber2}
                    onChange={handleChange}
                    placeholder="Enter RollNumber"
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <TextInput
                    label="RollNumber 3"
                    name="RollNumber3"
                    type="number"
                    value={formData.RollNumber3}
                    onChange={handleChange}
                    placeholder="Enter RollNumber"
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <TextInput
                    label="RollNumber 4"
                    name="RollNumber4"
                    type="number"
                    value={formData.RollNumber4}
                    onChange={handleChange}
                    placeholder="Enter RollNumber"
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <TextInput
                    label="RollNumber 5"
                    name="RollNumber5"
                    type="number"
                    value={formData.RollNumber5}
                    onChange={handleChange}
                    placeholder="Enter RollNumber"
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <TextInput
                    label="Brief Discription"
                    name="BriefDiscription"
                    type="text"
                    value={formData.BriefDiscription}
                    onChange={handleChange}
                    placeholder="Brief Discription"
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <TextInput
                    label="CSE Topic"
                    name="CSETopic"
                    type="text"
                    value={formData.CSETopic}
                    onChange={handleChange}
                    placeholder="Enter Topic"
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <TextInput
                    label="ECE Topic"
                    name="ECETopic"
                    type="text"
                    value={formData.ECETopic}
                    onChange={handleChange}
                    placeholder="Enter Topic"
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <TextInput
                    label="MECH Topic"
                    name="MECHTopic"
                    type="text"
                    value={formData.MECHTopic}
                    onChange={handleChange}
                    placeholder="Enter Topic"
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <TextInput
                    label="Design Topic"
                    name="DesignTopic"
                    type="text"
                    value={formData.DesignTopic}
                    onChange={handleChange}
                    placeholder="Enter Topic"
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <TextInput
                    label="CSE Percentage"
                    name="CSEPercentage"
                    type="number"
                    value={formData.CSEPercentage}
                    onChange={handleChange}
                    placeholder="Enter Percentage"
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <TextInput
                    label="ECE Percentage"
                    name="ECEPercentage"
                    type="number"
                    value={formData.ECEPercentage}
                    onChange={handleChange}
                    placeholder="Enter Percentage"
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <TextInput
                    label="MECH Percentage"
                    name="MECHPercentage"
                    type="number"
                    value={formData.MECHPercentage}
                    onChange={handleChange}
                    placeholder="Enter Percentage"
                  />
                </Grid.Col>
                <Grid.Col xs={12}>
                  <TextInput
                    label="Design Percentage"
                    name="DesignPercentage"
                    type="number"
                    value={formData.DesignPercentage}
                    onChange={handleChange}
                    placeholder="Enter Percentage"
                  />
                </Grid.Col>
              </>
            )}

            {formData.award === "Director's Silver Medal" && (
              <>
                <Grid.Col xs={12}>
                  <Textarea
                    label="Inside Achievements"
                    name="achievementInside"
                    value={formData.achievementInside}
                    onChange={handleChange}
                    placeholder="Enter achievements inside IIITDMJ"
                    minRows={3}
                  />
                </Grid.Col>

                <Grid.Col xs={12}>
                  <Textarea
                    label="Outside Achievements"
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