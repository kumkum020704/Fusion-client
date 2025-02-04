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
  SegmentedControl,
  Stack
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

  // Responsive tab control for smaller screens (xs to sm)
  const TabControl = () => (
    <SegmentedControl
      fullWidth
      size="sm"
      data={[
        { label: 'Merit-cum-Means', value: 'MCM' },
        { label: 'Medals', value: 'Medals' }
      ]}
      value={activeTab}
      onChange={setActiveTab}
      className={styles.mobileTabControl}
      hiddenFrom="md"
    />
  );

  // Desktop tab controls (md and above)
  const DesktopTabs = () => (
    <Grid 
      justify="center" 
      align="center" 
      mb="md" 
      visibleFrom="md"
      gutter="xl"
    >
      <Grid.Col span={{ md: 6, lg: 'auto' }}>
        <div
          role="button"
          tabIndex={0}
          className={activeTab === "MCM" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("MCM")}
          style={{
            borderBottom: activeTab === "MCM" ? "4px solid #1e90ff" : "none",
            color: activeTab === "MCM" ? "#1e90ff" : "#000",
            textAlign: 'center',
            padding: '10px 20px',
            width: '100%'
          }}
        >
          Merit-cum-Means Scholarship
        </div>
      </Grid.Col>
      <Grid.Col span={{ md: 6, lg: 'auto' }}>
        <div
          role="button"
          tabIndex={0}
          className={activeTab === "Medals" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("Medals")}
          style={{
            borderBottom: activeTab === "Medals" ? "4px solid #1e90ff" : "none",
            color: activeTab === "Medals" ? "#1e90ff" : "#000",
            textAlign: 'center',
            padding: '10px 20px',
            width: '100%'
          }}
        >
          Convocation Medals
        </div>
      </Grid.Col>
    </Grid>
  );

  return (
    <Container 
      fluid 
      className={styles.container}
      px={{ base: 'xs', sm: 'sm', md: 'md' }}
    >
      <Paper 
        className={styles.whiteBox} 
        p={{ base: 'xs', sm: 'md', lg: 'xl' }}
        radius="md"
        withBorder
      >
        <Stack spacing={{ base: 'md', sm: 'lg', md: 'xl' }}>
          <TabControl />
          <DesktopTabs />

          {activeTab === "MCM" && (
            <>
              <Title 
                order={2} 
                size={{ base: 'h4', sm: 'h3', md: 'h2' }} 
                mb={{ base: 'sm', md: 'md' }}
                ta="center"
              >
                Merit-cum-Means Scholarship
              </Title>
              {loading ? (
                <Loader size="md" />
              ) : (
                <div style={{ overflowX: 'auto', width: '100%' }}>
                  <Table.ScrollContainer minWidth={500}>
                    <Table 
                      className={styles.table} 
                      highlightOnHover 
                      striped
                      fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                    >
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th>Roll</Table.Th>
                          <Table.Th hiddenFrom="sm">Category</Table.Th>
                          <Table.Th>Income</Table.Th>
                          <Table.Th>CPI</Table.Th>
                          <Table.Th>File</Table.Th>
                          <Table.Th>Accept</Table.Th>
                          <Table.Th>Reject</Table.Th>
                          <Table.Th hiddenFrom="md">Under Review</Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        {applications.map((app, index) => (
                          <Table.Tr key={index}>
                            <Table.Td>{app.student}</Table.Td>
                            <Table.Td hiddenFrom="sm">{app.category}</Table.Td>
                            <Table.Td>{app.annual_income}</Table.Td>
                            <Table.Td>{app.cpi}</Table.Td>
                            <Table.Td>
                              <Button 
                                color="blue" 
                                size={{ base: 'xs', sm: 'sm', md: 'md' }}
                                fullWidth
                                px={{ base: 4, sm: 8, md: 16 }}
                              >
                                Files
                              </Button>
                            </Table.Td>
                            <Table.Td>
                              <Button 
                                color="green" 
                                size={{ base: 'xs', sm: 'sm', md: 'md' }}
                                fullWidth
                                px={{ base: 4, sm: 8, md: 16 }}
                              >
                                Accept
                              </Button>
                            </Table.Td>
                            <Table.Td>
                              <Button 
                                color="red" 
                                size={{ base: 'xs', sm: 'sm', md: 'md' }}
                                fullWidth
                                px={{ base: 4, sm: 8, md: 16 }}
                              >
                                Reject
                              </Button>
                            </Table.Td>
                            <Table.Td hiddenFrom="md">
                              <Button 
                                color="gray" 
                                size={{ base: 'xs', sm: 'sm', md: 'md' }}
                                fullWidth
                                px={{ base: 4, sm: 8, md: 16 }}
                              >
                                Review
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
        </Stack>
      </Paper>
    </Container>
  );
}

export default MCM_Applications;
