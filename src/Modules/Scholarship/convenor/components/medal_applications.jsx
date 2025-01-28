import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  Container, 
  Select, 
  Table, 
  Button, 
  Text, 
  Loader,
  Grid 
} from '@mantine/core';
import styles from "./medal_applications.module.css";

function MedalApplications() {
  const [selectedAward, setSelectedAward] = useState("Director's Silver Medal");
  const [medals, setMedals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMedalsData = async () => {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.log("No authorization token found in localStorage.");
        setError("No authorization token found.");
        setIsLoading(false);
        return;
      }

      let apiUrl = "";
      if (selectedAward === "Director's Silver Medal") {
        apiUrl = "http://127.0.0.1:8000/spacs/director-silver/";
      } else if (selectedAward === "Director's Gold Medal") {
        apiUrl = "http://127.0.0.1:8000/spacs/director_gold_list/";
      }

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        const incompleteMedals = response.data.filter(
          (medal) => medal.status === "INCOMPLETE"
        );
        setMedals(incompleteMedals);
      } else {
        setError("No data received from the API.");
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching medals data:", error);
      setError("Error fetching medals data.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMedalsData();
  }, [selectedAward]);

  const handleApproval = async (medalId, action) => {
    try {
      const token = localStorage.getItem("authToken");
  
      if (!token) {
        console.log("No authorization token found in localStorage.");
        setError("No authorization token found.");
        return;
      }
  
      let apiUrl = "";
      let payload = {};
  
      if (selectedAward === "Director's Gold Medal") {
        apiUrl = "http://127.0.0.1:8000/spacs/director-gold/accept-reject/";
        payload = {
          id: medalId,
          action: action === "approved" ? "accept" : "reject",
        };
      } else if (selectedAward === "Director's Silver Medal") {
        apiUrl = "http://127.0.0.1:8000/spacs/api/director_silver/decision/";
        payload = {
          id: medalId,
          status: action === "approved" ? "ACCEPTED" : "REJECTED",
        };
      }
  
      console.log("Sending payload:", payload);
  
      const response = await axios.post(apiUrl, payload, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        fetchMedalsData();
        setError(null);
      } else {
        setError("Error updating status.");
      }
    } catch (error) {
      console.error("Error updating status:", error.response || error.message);
      setError(
        `Error updating status: ${error.response ? error.response.data : error.message}`
      );
    }
  };
  
  return (
    <Container fluid className={styles.container}>
      <h2 className={styles.title}>Medal Applications</h2>

      <Grid mb="md">
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <div className={styles.awardSelector}>
            <Select
              label="Select Award:"
              value={selectedAward}
              onChange={setSelectedAward}
              data={[
                { value: "Director's Silver Medal", label: "Director's Silver Medal" },
                { value: "Director's Gold Medal", label: "Director's Gold Medal" }
              ]}
              size={{ base: 'xs', sm: 'sm' }}
              className={styles.select}
            />
          </div>
        </Grid.Col>
      </Grid>

      {isLoading && <Loader size="md" />}
      
      {!isLoading && !error && medals.length > 0 && (
        <div style={{ overflowX: 'auto', width: '100%' }}>
          <Table.ScrollContainer minWidth={500}>
            <Table className={styles.table} highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Roll No</Table.Th>
                  <Table.Th>Award</Table.Th>
                  <Table.Th>File</Table.Th>
                  <Table.Th>Accept</Table.Th>
                  <Table.Th>Reject</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {medals.map((medal, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>{medal.student}</Table.Td>
                    <Table.Td>{selectedAward}</Table.Td>
                    <Table.Td>
                      <Button
                        className={`${styles.button} ${styles.fileButton}`}
                        size={{ base: 'xs', sm: 'sm' }}
                      >
                        View
                      </Button>
                    </Table.Td>
                    <Table.Td>
                      <Button
                        className={`${styles.button} ${styles.acceptButton}`}
                        onClick={() => handleApproval(medal.id, "approved")}
                        size={{ base: 'xs', sm: 'sm' }}
                      >
                        Approve
                      </Button>
                    </Table.Td>
                    <Table.Td>
                      <Button
                        className={`${styles.button} ${styles.rejectButton}`}
                        onClick={() => handleApproval(medal.id, "rejected")}
                        size={{ base: 'xs', sm: 'sm' }}
                      >
                        Reject
                      </Button>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </div>
      )}

      {!isLoading && !error && medals.length === 0 && (
        <Text size="lg" c="dimmed" ta="center">No medals found.</Text>
      )}
    </Container>
  );
}

export default MedalApplications;