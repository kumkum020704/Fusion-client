import React, { useState } from 'react';
import { Button, FileButton, Grid, Group, Paper, Text, Title, Container, Alert } from '@mantine/core';
// import { IconCheck, IconUpload, IconAlertCircle } from '@tabler/icons-react';
import Header from "../Convocation/Header";

const DocumentUploadForm = () => {
  const [uploadStatus, setUploadStatus] = useState({});

  const documents = [
    { id: 'photo', name: 'Student Photo', type: 'image/*' },
    { id: 'income', name: 'Income Certificate', type: '.pdf,.doc,.docx' },
    { id: 'marksheet', name: 'Mark Sheet', type: '.pdf,.doc,.docx' },
    { id: 'feeReceipt', name: 'Fee Receipt', type: '.pdf,.jpg,.jpeg,.png' },
    { id: 'bankDetails', name: 'Bank Details', type: '.pdf,.doc,.docx' },
    { id: 'residentialCert', name: 'Residential Certificate', type: '.pdf,.doc,.docx' },
    { id: 'bonafideCert', name: 'Bonafide Student Certificate', type: '.pdf,.doc,.docx' },
    { id: 'aadhar', name: 'Aadhar Card', type: '.pdf,.jpg,.jpeg,.png' },
  ];

  const handleFileChange = (docId, file) => {
    if (file) {
      setUploadStatus((prev) => ({ ...prev, [docId]: 'uploading' }));

      setTimeout(() => {
        setUploadStatus((prev) => ({ ...prev, [docId]: 'success' }));
      }, 1500);
    }
  };

  return (
    <>
      <div style={{ marginLeft: '-173px' }}>
        <Header/>
      </div>
      <Container size="lg" my="xl">
        <Paper p="-15" radius="md" style={{ background: 'none', marginTop: '-40px' }}>
          <Title order={2} mb="lg">
            Document Upload
          </Title>
          <Text color="dimmed" mb="md">
            Please upload all required documents for your scholarship application.
          </Text>

          <Alert title="Important" color="blue" mb="lg">
            All documents should be clear and legible. Supported formats: PDF, JPEG, PNG, DOC.
          </Alert>

          <Grid>
            {documents.map((doc) => (
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

          <Group position="right" mt="xl">
            <Button variant="default">Cancel</Button>
            <Button color="blue">Submit All Documents</Button>
          </Group>
        </Paper>
      </Container>
    </>
  );
};

export default DocumentUploadForm;