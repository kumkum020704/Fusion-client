import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Group, Text } from "@mantine/core";

function Header() {
  return (
    <Container my="65">
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        }}
      >
        {/* Tab Navigation */}
        <Group position="left" spacing="xl" mb="sm">
          <NavLink
            to="/ScholarshipForm"
            style={({ isActive }) => ({
              textDecoration: "none",
              paddingBottom: "8px",
              borderBottom: isActive ? "4px solid #1e90ff" : "none", // Blue color for the active tab
              outline: "none",
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
              outline: "none",
            })}
          >
            <Text size="lg" weight={600} color="dark">
              Convocation Medals
            </Text>
          </NavLink>
        </Group>
      </div>
    </Container>
  );
}

export default Header;
