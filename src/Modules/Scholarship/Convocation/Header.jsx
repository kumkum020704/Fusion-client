import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Group, Text } from "@mantine/core";

function Header() {
  return (
    <Container my="65">
      {/* Tab Navigation */}
      <Group position="left" spacing="xl" mb="sm">
        <NavLink
          to="/ScholarshipForm"
          style={({ isActive }) => ({
            textDecoration: "none",
            paddingBottom: "8px",
            borderBottom: isActive ? "4px solid #1e90ff" : "none", // Blue color for the active tab
          })}
        >
          <Text size="lg" weight={600} color="dark">
            Merit-cum-Means Scholarship
          </Text>
        </NavLink>

        <NavLink
          to="/ConvocationMedal"
          style={({ isActive }) => ({
            textDecoration: "none",
            paddingBottom: "8px",
            borderBottom: isActive ? "4px solid #1e90ff" : "none", // Blue color for the active tab
          })}
        >
          <Text size="lg" weight={600} color="dark">
            Convocation Medals
          </Text>
        </NavLink>
      </Group>
    </Container>
  );
}

export default Header;
