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
    brother_name: "",
    brother_occupation: "",
    sister_name: "",
    sister_occupation: "",
    income_father: 0,
    income_mother: 0,
    income_other: 0,
    father_occ: "", 
    mother_occ: "", 
    father_occ_desc: "",
    mother_occ_desc: "",
    four_wheeler: null,
    four_wheeler_desc: "",
    two_wheeler: null,
    two_wheeler_desc: "",
    house: "",
    plot_area: null,
    constructed_area: null,
    school_fee: null,
    school_name: "",
    bank_name: "",
    loan_amount: null,
    college_fee: null,
    college_name: "", 
    annual_income: 0,
    date: "",
    award_id: 4,
    student: ""
  });
  const [documents, setDocuments] = useState({});

  const documentFields = [
    { id: 'income_certificate', name: 'income_certificate', type: '.pdf,.doc,.docx' },
    { id: 'Marksheet', name: 'Marksheet', type: '.pdf,.doc,.docx' },
    { id: 'Fee_Receipt', name: ' Fee_Receipt', type: '.pdf,.jpg,.jpeg,.png' },
    { id: 'Bank_details', name: 'Bank_details', type: '.pdf,.doc,.docx' },
    { id: 'Affidavit', name: 'Affidavit', type: '.pdf,.doc,.docx' },
    { id: 'Aadhar_card', name: 'Aadhar_card', type: '.pdf,.jpg,.jpeg,.png' },
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
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch('http://127.0.0.1:8000/spacs/mcm_update/', {
        method: 'POST',
        body: submissionData,
        headers: {
          Authorization: `Token ${token}`,

        },
      });

      if (response.ok) {
        console.log('Form data and documents submitted successfully.');
        alert('Form data and documents submitted successfully.');
        
      } else {
        console.error('Failed to submit form data and documents:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
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
                <Select
                  label="Father's Occupation"
                  name="father_occ"
                  placeholder="Select father's occupation"
                  value={formData.fathersOccupation}
                  onChange={(value) => handleInputChange({ target: { name: 'father_occ', value } })}
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
                <Select
                  label="Mother's Occupation"
                  name="mother_occ"
                  placeholder="Select mother's occupation"
                  value={formData.mothersOccupation}
                  onChange={(value) => handleInputChange({ target: { name: 'mother_occ', value } })}
                  data={[
                    { value: 'EMPLOYED', label: 'Employed' },
                    { value: 'HOUSE_WIFE', label: 'House Wife' },
                  ]}
                  mt="md"
                />
                <TextInput label="Brother's Name" name="brother_name" placeholder="Enter brother's name" value={formData.brother_name} onChange={handleInputChange} mt="md" />
                <TextInput label="Sister's Occupation" name="sister_occupation" placeholder="Enter sister's occupation" value={formData.sister_occupation} onChange={handleInputChange} mt="md" />
                <TextInput label="Mother's Annual Income" name="income_mother" placeholder="Enter mother's income" value={formData.income_mother} onChange={handleInputChange} mt="md" />
                <TextInput label="No of Four Wheeler" name="four_wheeler" placeholder="Enter number of vehicles" value={formData.four_wheeler} onChange={handleInputChange} mt="md" />
                <TextInput label="No of Two Wheeler" name="two_wheeler" placeholder="Enter number of vehicles" value={formData.two_wheeler} onChange={handleInputChange} mt="md" />
                <TextInput label="Two Wheeler Description" name="two_wheeler_desc" placeholder="Enter number of vehicles" value={formData.two_wheeler_desc} onChange={handleInputChange} mt="md" />
                <TextInput label="House" name="house" placeholder="Enter number of vehicles" value={formData.house} onChange={handleInputChange} mt="md" />
                <TextInput label="Plot Area" name="plot_area" placeholder="Enter number of vehicles" value={formData.plot_area} onChange={handleInputChange} mt="md" />
                <TextInput label="Constructed Area" name="constructed_area" placeholder="Enter number of vehicles" value={formData.constructed_area} onChange={handleInputChange} mt="md" />
                <TextInput label="Annual Income" name="annual_income" placeholder="Enter number of vehicles" value={formData.annual_income} onChange={handleInputChange} mt="md" />
                <TextInput label="College Name" name="college_name" placeholder="Enter vehicle description" value={formData.college_name} onChange={handleInputChange} mt="md" />

              </Grid.Col>

              {/* Right column */}
              <Grid.Col span={6}>
                <TextInput label="Father's Occupation Description" name="father_occ_desc" placeholder="Describe father's occupation" value={formData.father_occ_desc} onChange={handleInputChange} mt="md" />
                <TextInput label="Mother's Occupation Description" name="mother_occ_desc" placeholder="Describe mother's occupation" value={formData.mother_occ_desc} onChange={handleInputChange} mt="md" />
                <TextInput label="Brother's Occupation" name="brother_occupation" placeholder="Enter brother's occupation" value={formData.brother_occupation} onChange={handleInputChange} mt="md" />
                <TextInput label="Sister's Name" name="sister_name" placeholder="Enter sister's name" value={formData.sister_name} onChange={handleInputChange} mt="md" />
                <TextInput label="Father's Annual Income" name="income_father" placeholder="Enter father's income" value={formData.income_father} onChange={handleInputChange} mt="md" />
                <TextInput label="Other Sources Annual Income" name="income_other" placeholder="Enter other sources' income" value={formData.income_other} onChange={handleInputChange} mt="md" />
                <TextInput label="Four Wheeler Description" name="four_wheeler_desc" placeholder="Enter vehicle description" value={formData.four_wheeler_desc} onChange={handleInputChange} mt="md" />
                <TextInput label="School Fee" name="school_fee" placeholder="Enter vehicle description" value={formData.school_fee} onChange={handleInputChange} mt="md" />
                <TextInput label="School Name" name="school_name" placeholder="Enter vehicle description" value={formData.school_name} onChange={handleInputChange} mt="md" />
                <TextInput label="Bank Name" name="bank_name" placeholder="Enter vehicle description" value={formData.bank_name} onChange={handleInputChange} mt="md" />
                <TextInput label="Loan Amount" name="loan_amount" placeholder="Enter vehicle description" value={formData.loan_amount} onChange={handleInputChange} mt="md" />
                <TextInput label="College Fee" name="college_fee" placeholder="Enter vehicle description" value={formData.college_fee} onChange={handleInputChange} mt="md" />

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
