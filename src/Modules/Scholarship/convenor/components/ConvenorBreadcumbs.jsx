import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { Tabs, Button, Flex, Text } from "@mantine/core";
import { useState } from "react";
import styles from "../../../Dashboard/Dashboard.module.css";
import CatalogPage from "../../user/pages/ScholarshipPage";
import InviteApplications from "../forms/inviteApplications";
import BrowseApplicationPage from "../../user/pages/BrowseApplicationPage";
import MCM_Applications from "./MCM_Applications";



function ConvenorBreadcrumbs() {
  const [activeTab, setActiveTab] = useState("catalog");

  const tabItems = [
    { key: "catalog", label: "Catalog", component: <CatalogPage></CatalogPage> },
    { key: "invite", label: "Invite Application", component: <InviteApplications></InviteApplications> },
    { key: "browse", label: "Browse Application", component: <MCM_Applications></MCM_Applications> },
  ];

  const currentIndex = tabItems.findIndex((item) => item.key === activeTab);

  const handleTabChange = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % tabItems.length
        : (currentIndex - 1 + tabItems.length) % tabItems.length;

    setActiveTab(tabItems[newIndex].key);
  };

  return (
    <>
      <Flex
        justify="flex-start"
        align="center"
        gap={{ base: "0.75rem", md: "1.25rem" }}
        mt={{ base: "1.5rem", md: "2rem" }}
        ml={{ md: "lg" }}
        style={{ fontSize: "1.5rem" }}
      >
        <Button onClick={() => handleTabChange("prev")} variant="default" p={0} style={{ border: "none" }}>
          <CaretCircleLeft className={styles.fusionCaretCircleIcon} weight="light" size={32} />
        </Button>

        <div className={styles.fusionTabsContainer}>
          <Tabs value={activeTab}>
            <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
              {tabItems.map((item) => (
                <Tabs.Tab
                  key={item.key}
                  value={item.key}
                  className={
                    activeTab === item.key
                      ? styles.fusionActiveRecentTab
                      : styles.fusionInactiveTab
                  }
                  onClick={() => setActiveTab(item.key)}
                  style={{ textAlign: "center", padding: "1rem 1.5rem" }}
                >
                  <Text size="lg" weight={500} style={{ color: activeTab === item.key ? "#17abff" : "black" }}>
                    {item.label}
                  </Text>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </div>

        <Button onClick={() => handleTabChange("next")} variant="default" p={0} style={{ border: "none" }}>
          <CaretCircleRight className={styles.fusionCaretCircleIcon} weight="light" size={32} />
        </Button>
      </Flex>

      {/* Conditionally render component based on activeTab */}
      {tabItems.find((item) => item.key === activeTab)?.component}
    </>
  );
}

export default ConvenorBreadcrumbs;
