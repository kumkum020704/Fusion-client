import React, { useState, useEffect } from "react";
import { List, Text, Title, Divider, Container, Loader } from "@mantine/core"; // Import Loader for loading indicator
import axios from "axios";
import styles from "./Catalog.module.css";

function AwardsAndScholarshipCatalog() {
  const [selectedAward, setSelectedAward] = useState(null);
  const [awards, setAwards] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const handleAwardSelect = (award) => {
    setSelectedAward(award);
  };

  useEffect(() => {
    const fetchAwardsData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("http://127.0.0.1:8000/spacs/create-award/", {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        });
        setAwards(response.data);
        setSelectedAward(response.data[0]);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching awards data:", error.response ? error.response.data : error.message);
        setIsLoading(false); 
      }
    };

    fetchAwardsData();
  }, []);

  return (
    <Container className={styles.wrapper}>
      {isLoading ? (
        <Loader size="lg" /> 
      ) : (
        <>
          <div className={styles.listContainer}>
            <List spacing="sm" size="lg">
              {awards.map((award) => (
                <List.Item
                  key={award.id}
                  onClick={() => handleAwardSelect(award)}
                  className={`${styles.listItem} ${selectedAward?.id === award.id ? styles.activeItem : ""}`}
                >
                  {award.award_name}
                </List.Item>
              ))}
            </List>
          </div>

          <div className={styles.contentContainer}>
            {selectedAward && (
              <>
                <Title order={2} size="26px">{selectedAward.award_name}</Title>
                <Divider my="sm" />
                <Text size="14px">{selectedAward.catalog}</Text>
              </>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export default AwardsAndScholarshipCatalog;
