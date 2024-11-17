import React, { useState } from 'react';
import {
  Button,
  TextInput,
  Grid,
  Container,
  Paper,
  Title,
  Alert,
  FileButton,
  Text,
  Group,
  Select
} from '@mantine/core';

const ScholarshipForm = () => {
  const [step, setStep] = useState(1); // Step control for form sections
  const [uploadStatus, setUploadStatus] = useState({});
  const [formData, setFormData] = useState({
    category: '',
    roomNo: '',
    fathersOccupation: '',
    mothersName: '',
    mothersOccupation: '',
    brothersName: '',
    sistersOccupation: '',
    mothersIncome: '',
    numFourWheeler: '',
    hallNo: '',
    fathersName: '',
    fathersOccupationDescription: '',
    mothersOccupationDescription: '',
    brothersOccupation: '',
    sistersName: '',
    fathersIncome: '',
    otherSourcesIncome: '',
    fourWheelerDescription: '',
  });
  const [documents, setDocuments] = useState({});

  const documentFields = [
    { id: 'photo', name: 'Student Photo', type: 'image/*' },
    { id: 'income', name: 'Income Certificate', type: '.pdf,.doc,.docx' },
    { id: 'marksheet', name: 'Mark Sheet', type: '.pdf,.doc,.docx' },
    { id: 'feeReceipt', name: 'Fee Receipt', type: '.pdf,.jpg,.jpeg,.png' },
    { id: 'bankDetails', name: 'Bank Details', type: '.pdf,.doc,.docx' },
    { id: 'residentialCert', name: 'Residential Certificate', type: '.pdf,.doc,.docx' },
    { id: 'bonafideCert', name: 'Bonafide Student Certificate', type: '.pdf,.doc,.docx' },
    { id: 'aadhar', name: 'Aadhar Card', type: '.pdf,.jpg,.jpeg,.png' },
  ];

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFileChange = (docId, file) => {
    if (file) {
      setUploadStatus((prev) => ({ ...prev, [docId]: 'uploading' }));
      setDocuments((prev) => ({ ...prev, [docId]: file }));
      setTimeout(() => {
        setUploadStatus((prev) => ({ ...prev, [docId]: 'success' }));
      }, 1500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {

    const submissionData = new FormData();

    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    Object.keys(documents).forEach((key) => {
      submissionData.append(key, documents[key]);
    });
    for (const [key, value] of submissionData.entries()) {
      console.log(`${key}:`, value);
    }
    // try {
    //   const response = await fetch('http://127.0.0.1:8000/spacs', {
    //     method: 'POST',
    //     body: submissionData,
    //   });

    //   if (response.ok) {
    //     console.log('Form data and documents submitted successfully.');
    //   } else {
    //     console.error('Failed to submit form data and documents:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('An error occurred:', error);
    // }
  };

  return (
    <Container size="lg" style={{ padding: "0px", flexDirection: 'column' }}>
      <Paper radius="md" p="sm" style={{ background: 'none', marginTop: "-40px" }}>
        <Title order={2} mb="lg">
          {step === 1 ? 'Application Form for Merit Cum Means (MCM) Scholarship:' : 'Document Upload'}
        </Title>

        {step === 1 && (
          <form onSubmit={handleNext}>
            <Grid>
              {/* Left column */}
              <Grid.Col span={6}>
                <TextInput label="Category" name="category" placeholder="Enter your category" value={formData.category} onChange={handleInputChange} />
                <TextInput label="Room no" name="roomNo" placeholder="Enter room number" value={formData.roomNo} onChange={handleInputChange} mt="md" />
                <Select
                  label="Father's Occupation"
                  name="fathersOccupation"
                  placeholder="Select father's occupation"
                  value={formData.fathersOccupation}
                  onChange={(value) => handleInputChange({ target: { name: 'fathersOccupation', value } })}
                  data={[
                    { value: 'government', label: 'Government' },
                    { value: 'private', label: 'Private' },
                    { value: 'public', label: 'Public' },
                    { value: 'business', label: 'Business' },
                    { value: 'medical', label: 'Medical' },
                    { value: 'consultant', label: 'Consultant' },
                    { value: 'pensioners', label: 'Pensioners' },
                  ]}
                  mt="md"
                />
                <TextInput label="Mother's Name" name="mothersName" placeholder="Enter mother's name" value={formData.mothersName} onChange={handleInputChange} mt="md" />
                <Select
                  label="Mother's Occupation"
                  name="mothersOccupation"
                  placeholder="Select mother's occupation"
                  value={formData.mothersOccupation}
                  onChange={(value) => handleInputChange({ target: { name: 'mothersOccupation', value } })}
                  data={[
                    { value: 'EMPLOYED', label: 'Employed' },
                    { value: 'HOUSE_WIFE', label: 'House Wife' },
                  ]}
                  mt="md"
                />
                <TextInput label="Brother's Name" name="brothersName" placeholder="Enter brother's name" value={formData.brothersName} onChange={handleInputChange} mt="md" />
                <TextInput label="Sister's Occupation" name="sistersOccupation" placeholder="Enter sister's occupation" value={formData.sistersOccupation} onChange={handleInputChange} mt="md" />
                <TextInput label="Mother's Annual Income" name="mothersIncome" placeholder="Enter mother's income" value={formData.mothersIncome} onChange={handleInputChange} mt="md" />
                <TextInput label="No of Four Wheeler" name="numFourWheeler" placeholder="Enter number of vehicles" value={formData.numFourWheeler} onChange={handleInputChange} mt="md" />
              </Grid.Col>

              {/* Right column */}
              <Grid.Col span={6}>
                <TextInput label="Hall No." name="hallNo" placeholder="Enter hall number" value={formData.hallNo} onChange={handleInputChange} />
                <TextInput label="Father's Name/Guardian's" name="fathersName" placeholder="Enter father's name" value={formData.fathersName} onChange={handleInputChange} mt="md" />
                <TextInput label="Father's Occupation Description" name="fathersOccupationDescription" placeholder="Describe father's occupation" value={formData.fathersOccupationDescription} onChange={handleInputChange} mt="md" />
                <TextInput label="Mother's Occupation Description" name="mothersOccupationDescription" placeholder="Describe mother's occupation" value={formData.mothersOccupationDescription} onChange={handleInputChange} mt="md" />
                <TextInput label="Brother's Occupation" name="brothersOccupation" placeholder="Enter brother's occupation" value={formData.brothersOccupation} onChange={handleInputChange} mt="md" />
                <TextInput label="Sister's Name" name="sistersName" placeholder="Enter sister's name" value={formData.sistersName} onChange={handleInputChange} mt="md" />
                <TextInput label="Father's Annual Income" name="fathersIncome" placeholder="Enter father's income" value={formData.fathersIncome} onChange={handleInputChange} mt="md" />
                <TextInput label="Other Sources Annual Income" name="otherSourcesIncome" placeholder="Enter other sources' income" value={formData.otherSourcesIncome} onChange={handleInputChange} mt="md" />
                <TextInput label="Four Wheeler Description" name="fourWheelerDescription" placeholder="Enter vehicle description" value={formData.fourWheelerDescription} onChange={handleInputChange} mt="md" />
              </Grid.Col>

            </Grid>
            {/* Next Button */}
            <Group position="right" mt="xl">
              <Button type="submit" color="blue">
                Next
              </Button>
            </Group>
          </form>
        )}

        {step === 2 && (
          <>
            <Text color="dimmed" mb="md">
              Please upload all required documents for your scholarship application.
            </Text>

            <Alert title="Important" color="blue" mb="lg">
              All documents should be clear and legible. Supported formats: PDF, JPEG, PNG, DOC.
            </Alert>

            <Grid>
              {documentFields.map((doc) => (
                <Grid.Col key={doc.id} xs={12} md={6}>
                  <Text size="sm" weight={500} mb="xs">
                    {doc.name}
                  </Text>
                  <FileButton onChange={(file) => handleFileChange(doc.id, file)} accept={doc.type}>
                    {(fileButtonProps) => (
                      <Button
                        onClick={fileButtonProps.onClick}
                        fullWidth
                        color={uploadStatus[doc.id] === 'success' ? 'green' : 'gray'}
                      >
                        {uploadStatus[doc.id] === 'success'
                          ? 'Uploaded Successfully'
                          : `Choose ${doc.name}`}
                      </Button>
                    )}
                  </FileButton>
                </Grid.Col>
              ))}
            </Grid>

            {/* Submit Button */}
            <Group position="right" mt="xl">
              <Button variant="default" onClick={() => setStep(1)}>Back</Button>
              <Button color="blue" onClick={handleSubmit}>Submit All Documents</Button>
            </Group>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default ScholarshipForm;
