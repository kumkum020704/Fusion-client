import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  Container, 
  Title, 
  Select, 
  Table, 
  Button, 
  Text,
  Stack,
  Group,
  ScrollArea,
  Box
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const MedalApplications = () => {
  const [selectedAward, setSelectedAward] = useState("Director's Silver Medal");
  const [medals, setMedals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Proper Bootstrap breakpoints
  const isXs = useMediaQuery('(max-width: 576px)');
  const isSm = useMediaQuery('(max-width: 768px)');
  const isMd = useMediaQuery('(max-width: 992px)');
  const isLg = useMediaQuery('(max-width: 1200px)');
  const isXl = useMediaQuery('(max-width: 1400px)');

  // Get appropriate text size based on breakpoint
  const getTextSize = () => {
    if (isXs) return 'xs';
    if (isSm) return 'sm';
    return 'md';
  };

  // Get appropriate button size based on breakpoint
  const getButtonSize = () => {
    if (isXs) return 'xs';
    if (isSm) return 'sm';
    return 'md';
  };

  // Rest of the data fetching and handling functions remain the same...
  // [Previous fetchMedalsData and handleApproval functions remain unchanged]

  const MedalRow = ({ medal, isResponsive }) => {
    const textSize = getTextSize();
    const buttonSize = getButtonSize();

    if (isSm) {
      return (
        <div className="p-4 border-b">
          <Stack spacing={isXs ? "xs" : "sm"}>
            <Text size={textSize} fw={500}>
              <Text span fw={700}>Roll No:</Text> {medal.student}
            </Text>
            <Text size={textSize} fw={500}>
              <Text span fw={700}>Award:</Text> {selectedAward}
            </Text>
            <Group spacing={isXs ? "xs" : "sm"}>
              <Button 
                variant="filled" 
                size={buttonSize}
                onClick={() => handleView(medal.id)}
              >
                View
              </Button>
              <Button 
                color="green" 
                variant="filled"
                size={buttonSize}
                onClick={() => handleApproval(medal.id, "approved")}
              >
                Approve
              </Button>
              <Button 
                color="red" 
                variant="filled"
                size={buttonSize}
                onClick={() => handleApproval(medal.id, "rejected")}
              >
                Reject
              </Button>
            </Group>
          </Stack>
        </div>
      );
    }

    return (
      <Table.Tr>
        <Table.Td>
          <Text size={textSize}>{medal.student}</Text>
        </Table.Td>
        <Table.Td>
          <Text size={textSize}>{selectedAward}</Text>
        </Table.Td>
        <Table.Td>
          <Button 
            variant="filled"
            size={buttonSize}
            onClick={() => handleView(medal.id)}
          >
            View
          </Button>
        </Table.Td>
        <Table.Td>
          <Button 
            color="green"
            variant="filled"
            size={buttonSize}
            onClick={() => handleApproval(medal.id, "approved")}
          >
            Approve
          </Button>
        </Table.Td>
        <Table.Td>
          <Button 
            color="red"
            variant="filled"
            size={buttonSize}
            onClick={() => handleApproval(medal.id, "rejected")}
          >
            Reject
          </Button>
        </Table.Td>
      </Table.Tr>
    );
  };

  const titleSize = isXs ? 'h3' : (isSm ? 'h2' : 'h1');
  const textSize = getTextSize();
  const buttonSize = getButtonSize();

  // Container styles based on screen size
  const containerStyles = {
    width: '100%',
    maxWidth: isSm ? '100%' : '800px',
    marginLeft: isSm ? 'auto' : '0',
    marginRight: isSm ? 'auto' : '0',
    padding: isXs ? '1rem' : (isSm ? '1.5rem' : '2rem')
  };

  return (
    <Box 
      sx={(theme) => ({
        padding: theme.spacing.md,
        width: '100%'
      })}
    >
      <div style={containerStyles}>
        <Title order={titleSize} mb={isXs ? 'xs' : 'md'} style={{ textAlign: isSm ? 'center' : 'left' }}>
          Medal Applications
        </Title>

        <Select
          label="Select Award"
          value={selectedAward}
          onChange={setSelectedAward}
          data={[
            { value: "Director's Silver Medal", label: "Director's Silver Medal" },
            { value: "Director's Gold Medal", label: "Director's Gold Medal" }
          ]}
          mb={isXs ? 'xs' : 'md'}
          size={buttonSize}
          styles={{
            root: {
              maxWidth: isSm ? '100%' : '400px'
            }
          }}
        />

        {isLoading && <Text size={textSize}></Text>}

        {!isLoading && !error && medals.length > 0 && (
          <ScrollArea>
            {isSm ? (
              <Stack spacing={isXs ? 'xs' : 'sm'}>
                {medals.map((medal, index) => (
                  <MedalRow key={index} medal={medal} isResponsive={true} />
                ))}
              </Stack>
            ) : (
              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>
                      <Text size={textSize} fw={700}>Roll No</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size={textSize} fw={700}>Award</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size={textSize} fw={700}>File</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size={textSize} fw={700}>Accept</Text>
                    </Table.Th>
                    <Table.Th>
                      <Text size={textSize} fw={700}>Reject</Text>
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {medals.map((medal, index) => (
                    <MedalRow key={index} medal={medal} isResponsive={false} />
                  ))}
                </Table.Tbody>
              </Table>
            )}
          </ScrollArea>
        )}

        {!isLoading && !error && medals.length === 0 && (
          <Text size={textSize}>No medals found.</Text>
        )}
      </div>
    </Box>
  );
};

export default MedalApplications;

