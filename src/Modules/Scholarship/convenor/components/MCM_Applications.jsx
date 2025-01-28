import React, { useState, useEffect } from "react";
import { 
  Table, 
  Button, 
  Container, 
  Loader, 
  Grid, 
  Title,
  Text,
  Paper,
  SegmentedControl
} from "@mantine/core";
import styles from "./MCM_applications.module.css";
import Medal_applications from "./medal_applications";

function MCM_Applications() {
  const [activeTab, setActiveTab] = useState("MCM");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch("http://127.0.0.1:8000/spacs/scholarship-details/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }        
        const data = await response.json();
        setApplications(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch scholarship details:", error);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // Responsive tab control for small screens
  const TabControl = () => (
    <SegmentedControl
      fullWidth
      size={{ base: 'xs', sm: 'sm', md: 'md' }}
      data={[
        { label: 'Merit-cum-Means Scholarship', value: 'MCM' },
        { label: 'Convocation Medals', value: 'Medals' }
      ]}
      value={activeTab}
      onChange={setActiveTab}
      className={styles.mobileTabControl}
      hiddenFrom="sm"
    />
  );

  // Desktop tab controls
  const DesktopTabs = () => (
    <Grid justify="center" align="center" mb="md" visibleFrom="sm">
      <Grid.Col span={{ base: 6, sm: 'auto' }}>
        <div
          role="button"
          tabIndex={0}
          className={activeTab === "MCM" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("MCM")}
          style={{
            borderBottom: activeTab === "MCM" ? "4px solid #1e90ff" : "none",
            color: activeTab === "MCM" ? "#1e90ff" : "#000",
            textAlign: 'center',
            padding: '10px',
            width: '100%'
          }}
        >
          Merit-cum-Means Scholarship
        </div>
      </Grid.Col>
      <Grid.Col span={{ base: 6, sm: 'auto' }}>
        <div
          role="button"
          tabIndex={0}
          className={activeTab === "Medals" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("Medals")}
          style={{
            borderBottom: activeTab === "Medals" ? "4px solid #1e90ff" : "none",
            color: activeTab === "Medals" ? "#1e90ff" : "#000",
            textAlign: 'center',
            padding: '10px',
            width: '100%'
          }}
        >
          Convocation Medals
        </div>
      </Grid.Col>
    </Grid>
  );

  return (
    <Container fluid className={styles.container}>
      <Paper className={styles.whiteBox} p={{ base: 'xs', sm: 'md' }}>
        <TabControl />
        <DesktopTabs />

        {activeTab === "MCM" && (
          <>
            <Title order={2} size={{ base: 'h3', sm: 'h2' }} mb="md">
              Merit-cum-Means Scholarship
            </Title>
            {loading ? (
              <Loader size="md" />
            ) : (
              <div style={{ overflowX: 'auto', width: '100%' }}>
                <Table.ScrollContainer minWidth={500}>
                  <Table className={styles.table} highlightOnHover striped>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>Roll</Table.Th>
                        <Table.Th>Category</Table.Th>
                        <Table.Th>Income</Table.Th>
                        <Table.Th>CPI</Table.Th>
                        <Table.Th>File</Table.Th>
                        <Table.Th>Accept</Table.Th>
                        <Table.Th>Reject</Table.Th>
                        <Table.Th>Under Review</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {applications.map((app, index) => (
                        <Table.Tr key={index}>
                          <Table.Td>{app.student}</Table.Td>
                          <Table.Td>{app.category}</Table.Td>
                          <Table.Td>{app.annual_income}</Table.Td>
                          <Table.Td>{app.cpi}</Table.Td>
                          <Table.Td>
                            <Button 
                              color="blue" 
                              size={{ base: 'xs', sm: 'sm' }}
                              fullWidth
                            >
                              Files
                            </Button>
                          </Table.Td>
                          <Table.Td>
                            <Button 
                              color="green" 
                              size={{ base: 'xs', sm: 'sm' }}
                              fullWidth
                            >
                              Accept
                            </Button>
                          </Table.Td>
                          <Table.Td>
                            <Button 
                              color="red" 
                              size={{ base: 'xs', sm: 'sm' }}
                              fullWidth
                            >
                              Reject
                            </Button>
                          </Table.Td>
                          <Table.Td>
                            <Button 
                              color="gray" 
                              size={{ base: 'xs', sm: 'sm' }}
                              fullWidth
                            >
                              Under Review
                            </Button>
                          </Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>
                </Table.ScrollContainer>
              </div>
            )}
          </>
        )}

        {activeTab === "Medals" && <Medal_applications />}
      </Paper>
    </Container>
  );
}

export default MCM_Applications;