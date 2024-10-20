import React from 'react';
import { Button, TextInput, Grid, Container, Paper, Title } from '@mantine/core';
import Header from "../Convocation/Header";
import { useNavigate } from 'react-router-dom';

const ScholarshipForm = () => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    // Navigate to the document upload page
    navigate('/Scholar2');
  };

  return (
    <>
      
      <Container size="lg" style={{padding:"0px",flexDirection:'column'}}>
      <div style={{marginLeft:"-173px"}}>
          <Header/>
      </div>
      
      <Container size="lg" style={{ background: 'none', marginTop:"-40px" }}>
      <Paper  radius="md" p="sm" bg="none"  >
          <Title order={2} mb="lg">
            Application Form for Merit Cum Means (MCM) Scholarship:
          </Title>

          <form>
            <Grid>
              {/* Left column */}
              <Grid.Col span={6}>
                <TextInput label="Category" placeholder="Enter your category" />
                <TextInput label="Room no" placeholder="Enter room number" mt="md" />
                <TextInput label="Father's Occupation" placeholder="Enter father's occupation" mt="md" />
                <TextInput label="Mother's Name" placeholder="Enter mother's name" mt="md" />
                <TextInput label="Mother's Occupation" placeholder="Enter mother's occupation" mt="md" />
                <TextInput label="Brother's Name" placeholder="Enter brother's name" mt="md" />
                <TextInput label="Sister's Occupation" placeholder="Enter sister's occupation" mt="md" />
                <TextInput label="Mother's Annual Income" placeholder="Enter mother's income" mt="md" />
                <TextInput label="No of Four Wheeler" placeholder="Enter number of vehicles" mt="md" />
              </Grid.Col>

              {/* Right column */}
              <Grid.Col span={6}>
                <TextInput label="Hall No." placeholder="Enter hall number" />
                <TextInput label="Father's Name/Guardian's" placeholder="Enter father's name" mt="md" />
                <TextInput
                  label="Father's Occupation Description"
                  placeholder="Describe father's occupation"
                  mt="md"
                />
                <TextInput
                  label="Mother's Occupation Description"
                  placeholder="Describe mother's occupation"
                  mt="md"
                />
                <TextInput
                  label="Brother's Occupation"
                  placeholder="Enter brother's occupation"
                  mt="md"
                />
                <TextInput
                  label="Sister's Name"
                  placeholder="Enter sister's name"
                  mt="md"
                />
                <TextInput
                  label="Father's Annual Income"
                  placeholder="Enter father's income"
                  mt="md"
                />
                <TextInput
                  label="Other Sources Annual Income"
                  placeholder="Enter other sources' income"
                  mt="md"
                />
                <TextInput
                  label="Four Wheeler Description"
                  placeholder="Enter vehicle description"
                  mt="md"
                />
              </Grid.Col>
            </Grid>

            {/* Button */}
            <Grid justify="flex-end" mt="xl">
              <Grid.Col span="content">
                <Button onClick={handleNext} color="blue">
                  Next
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </Paper>
      </Container>
        
      </Container>
    </>
  );
};

export default ScholarshipForm;