import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { Tabs, Button, Flex, Text } from "@mantine/core";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from "../../../Dashboard/Dashboard.module.css";

function ConvenorBreadcrumbs() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define the tabs
  const tabItems = [
    { path: "/scholarship", label: "Catalog" },
    { path: "/convenor/invite", label: "Invite Application" },
    { path: "/convenor/MCM_application", label: "Browse Application" },
  ];

  const activeTab = location.pathname;

  const handleTabChange = (direction) => {
    const currentIndex = tabItems.findIndex((item) => item.path === activeTab);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % tabItems.length
        : (currentIndex - 1 + tabItems.length) % tabItems.length;

    navigate(tabItems[newIndex].path);
  };

  return (
    <Flex
      justify="flex-start"
      align="center"
      gap={{ base: "0.75rem", md: "1.25rem" }}
      mt={{ base: "1.5rem", md: "2rem" }}
      ml={{ md: "lg" }}
      style={{ fontSize: "1.5rem" }} // Match size with UserBreadcrumbs
    >
      {/* Left Caret */}
      <Button
        onClick={() => handleTabChange("prev")}
        variant="default"
        p={0}
        style={{ border: "none" }}
      >
        <CaretCircleLeft
          className={styles.fusionCaretCircleIcon}
          weight="light"
          size={32}
        />
      </Button>

      {/* Tabs */}
      <div className={styles.fusionTabsContainer}>
        <Tabs value={activeTab}>
          <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
            {tabItems.map((item, index) => (
              <Tabs.Tab
                key={index}
                value={item.path}
                className={
                  activeTab === item.path
                    ? styles.fusionActiveRecentTab // Apply active styles
                    : styles.fusionInactiveTab // Apply inactive styles
                }
                style={{
                  textAlign: "center",
                  padding: "1rem 1.5rem", // Consistent padding
                }}
              >
                <NavLink
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: activeTab === item.path ? "#17abff" : "black", // Ensure NavLink color matches the active/inactive styles
                  }}
                >
                  <Text size="lg" weight={500}>
                    {item.label}
                  </Text>
                </NavLink>
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </div>

      {/* Right Caret */}
      <Button
        onClick={() => handleTabChange("next")}
        variant="default"
        p={0}
        style={{ border: "none" }}
      >
        <CaretCircleRight
          className={styles.fusionCaretCircleIcon}
          weight="light"
          size={32}
        />
      </Button>
    </Flex>
  );
}

export default ConvenorBreadcrumbs;
