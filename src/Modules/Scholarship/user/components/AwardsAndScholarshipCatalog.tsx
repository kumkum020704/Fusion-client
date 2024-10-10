import React, { useState } from "react";
import { List, Text, Title, Divider, Container } from '@mantine/core';
import styles from './Catalog.module.css';
import UserBreadcumbs from "./UserBreadcumbs";

const AwardsAndScholarshipCatalog = () => {
  const [desc, setDesc] = useState(1);

  const changeDesc = (value) => {
    setDesc(value);
  }

  return (
    <Container className={styles.wrapper}> 
      <div className={styles.listContainer}>
        <List spacing="sm" size="lg">
          <List.Item
            onClick={() => changeDesc(1)}
            className={`${styles.listItem} ${desc === 1 ? styles.activeItem : ""}`}
          >
            Merit-Cum-Means
          </List.Item>
          <List.Item
            onClick={() => changeDesc(2)}
            className={`${styles.listItem} ${desc === 2 ? styles.activeItem : ""}`}
          >
            DSM Proficiency Gold Medal
          </List.Item>
          <List.Item
            onClick={() => changeDesc(3)}
            className={`${styles.listItem} ${desc === 3 ? styles.activeItem : ""}`}
          >
            Director’s Gold Medal
          </List.Item>
          <List.Item
            onClick={() => changeDesc(4)}
            className={`${styles.listItem} ${desc === 4 ? styles.activeItem : ""}`}
          >
            Director’s Silver Medal
          </List.Item>
          <List.Item
            onClick={() => changeDesc(5)}
            className={`${styles.listItem} ${desc === 5 ? styles.activeItem : ""}`}
          >
            Notional Prices
          </List.Item>
        </List>
      </div>

      <div className={styles.contentContainer}>
        {desc === 1 && (
          <>
            <Title order={2}>Merit-Cum-Means</Title>
            <Divider my="sm" />
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, officia praesentium alias non cupiditate odit unde architecto, dolores libero totam neque suscipit obcaecati similique velit quisquam tempore facere aspernatur maxime facilis dolorem rem asperiores eveniet? Rerum totam quisquam sapiente voluptates, delectus nihil perferendis perspiciatis esse fugiat itaque, ab quod impedit soluta ad fugit nisi? Iste distinctio alias commodi doloribus non.</Text>
          </>
        )}
        {desc === 2 && (
          <>
            <Title order={2}>DSM Proficiency Gold Medal</Title>
            <Divider my="sm" />
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, adipisci. Aspernatur eveniet temporibus repellendus asperiores obcaecati, dolorem cum dicta iusto a maiores, quia accusamus. Fuga.</Text>
          </>
        )}
        {desc === 3 && (
          <>
            <Title order={2}>Director’s Gold Medal</Title>
            <Divider my="sm" />
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe similique praesentium doloremque iusto minima amet vero sit eveniet corporis omnis eaque nobis libero, fugit provident eligendi, ratione ullam! Labore, libero magni veniam repellendus cupiditate soluta omnis aut reprehenderit dignissimos cum sed earum perferendis asperiores atque maiores molestias sequi totam? A inventore error expedita, quidem dolorum ipsum minus esse voluptates ea, dolorem, adipisci veritatis commodi atque. Mollitia quam ratione assumenda, consectetur illum nemo laboriosam qui harum dolorem accusantium provident. Neque, fugit asperiores molestiae totam velit autem repellat, accusamus impedit officia, sint eum nisi magni perferendis cupiditate quibusdam tenetur corrupti sit.</Text>
          </>
        )}
        {desc === 4 && (
          <>
            <Title order={2}>Director’s Silver Medal</Title>
            <Divider my="sm" />
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nihil ipsum delectus atque, numquam repellendus. Corrupti soluta assumenda omnis, suscipit impedit maiores eius doloremque laboriosam! Possimus delectus tempora nisi minus ducimus eius a sit necessitatibus quia voluptatum, ipsam itaque voluptatem maxime adipisci laboriosam architecto molestiae quibusdam unde. Omnis eum laboriosam deleniti tempora soluta, dolore ex perspiciatis, praesentium iste error esse dolorum, magni a consequatur animi nihil rem perferendis quae? Consequuntur!</Text>
          </>
        )}
        {desc === 5 && (
          <>
            <Title order={2}>Notional Prices</Title>
            <Divider my="sm" />
            <Text>Lorem ipsum dolor sit amet...</Text>
          </>
        )}
      </div>
    </Container>
  );
};

export default AwardsAndScholarshipCatalog;
