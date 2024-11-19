import { useState, useRef, useEffect } from "react";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { Tabs, Button, Flex, Text } from "@mantine/core";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate for routing
import CustomBreadcrumbs from "../../../../components/Breadcrumbs";
import classes from "../../../Dashboard/Dashboard.module.css";

function UserBreadcrumbs() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const tabItems = [
    { path: "/scholarship", label: "Catalog" },
    { path: "/user/browseApplication", label: "Browse Application" },
    { path: "/user/scholarshipStatus", label: "Scholarship Status" },
  ];

  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const tabsListRef = useRef(null);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabChange = (direction) => {
    const currentIndex = tabItems.findIndex(item => item.path === activeTab);
    let newIndex;

    if (direction === "next") {
      // Move to the next tab; wrap to the first tab if at the end
      newIndex = (currentIndex + 1) % tabItems.length;
    } else {
      // Move to the previous tab; wrap to the last tab if at the beginning
      newIndex = (currentIndex - 1 + tabItems.length) % tabItems.length;
    }

    const newPath = tabItems[newIndex].path;
    setActiveTab(newPath);
    navigate(newPath);

    tabsListRef.current.scrollBy({
      left: direction === "next" ? 50 : -50,
      behavior: "smooth",
    });
  };

  return (
    <>
      <CustomBreadcrumbs />
      <Flex
        justify="flex-start"
        align="center"
        gap={{ base: "0.75rem", md: "1.25rem" }} // Increased gap
        mt={{ base: "1.5rem", md: "2rem" }} // Increased top margin
        ml={{ md: "lg" }}
        style={{ fontSize: "1.5rem" }} // Increased font size for Flex container
      >
        <Button
          onClick={() => handleTabChange("prev")}
          variant="default"
          p={0}
          style={{ border: "none" }}
        >
          <CaretCircleLeft
            className={classes.fusionCaretCircleIcon}
            weight="light"
            size={32} // Increased icon size
          />
        </Button>

        <div className={classes.fusionTabsContainer} ref={tabsListRef}>
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
              {tabItems.map((item, index) => (
                <Tabs.Tab
                  value={item.path}
                  key={index}
                  className={
                    activeTab === item.path
                      ? classes.fusionActiveRecentTab
                      : ""
                  }
                  style={{
                    padding: "1rem 1.5rem", // Increased padding for tabs
                    color: activeTab === item.path ? "blue" : "black", // Blue when active, black otherwise
                    transition: "color 0.3s", // Smooth transition effect for color change
                  }}
                >
                  <NavLink
                    to={item.path}
                    style={{
                      textDecoration: 'none',
                      color: activeTab === item.path ? "blue" : "black", // Blue when clicked, black otherwise
                      fontWeight: activeTab === item.path ? "bold" : "normal", // Bold text for active tab
                    }}
                  >
                    <Text size="lg" weight={500}>{item.label}</Text> {/* Increased text size and weight */}
                  </NavLink>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </div>

        <Button
          onClick={() => handleTabChange("next")}
          variant="default"
          p={0}
          style={{ border: "none" }}
        >
          <CaretCircleRight
            className={classes.fusionCaretCircleIcon}
            weight="light"
            size={32} // Increased icon size
          />
        </Button>
      </Flex>

      {/* Conditional rendering based on the active tab path */}
      {activeTab === "/catalog"}
      {activeTab === "/browse-application"}
      {activeTab === "/scholarship-status"}
    </>
  );
}

export default UserBreadcrumbs;
