import React, { useState } from "react";
import { List, Text, Title, Divider, Container } from "@mantine/core";
import styles from "./Catalog.module.css";
import UserBreadcumbs from "./UserBreadcumbs";

function AwardsAndScholarshipCatalog() {
  const [desc, setDesc] = useState(1);

  const changeDesc = (value) => {
    setDesc(value);
  };

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
            <Text>
              4.1 or 3.1.4.2 <br />
              as well as means criterion (Section 2.2.) 3.1.3.2 A holder of any
              other scholarship from any other source shall not be eligible to
              apply for the MCM Scholarship unless the same is surrendered.
              3.1.3.3 On the commencement of each academic year, the Convener,
              SPACS shall invite applications for the award of MCM Scholarships
              from students of all years except those of first year. Students
              who are eligible for the same shall be required to apply in a
              prescribed format available with this document as well as on the
              Institute’s website and also from the Academic Section. They would
              be required to submit completed applications, along with
              supporting documents prescribed in Annexure I through V of
              application form, as applicable, before the last date specified in
              the notice of the Convener, SPACS. 3.1.3.4 Income affidavit for
              the year, proceeding the year of application, of the MCM
              Scholarship shall be submitted by the parent/guardian of the
              applicant along with completed application. 3.1.3.5 Applications
              for the MCM Scholarship from first year students shall be sought
              at the commencement of the second semester of the programme.
              3.1.3.6 In case (a) the circumstances of means for a student have
              changed for reasons such as the death/ retirement of the earning
              parent(s) or any other unforeseen reasons and (b) unutilized MCM
              scholarships are still available, the Convener, SPACS may, at
              his/her discretion, also accept an application from a student at
              any time during the academic year. If awarded, in all such cases,
              the MCM Scholarship shall become tenable from the month in which
              the circumstance pertaining to means have changed. 3.1.4 Award of
              MCM Scholarship and its Duration 3.1.4.1 Except for first year
              students, (i) a minimum reporting CPI of 6.0 for general category
              students and (ii) a minimum reporting CPI of 5.5 for SC/ST
              category students, at the end of the preceding academic year shall
              be the essential requirement for the award of MCM Scholarship. 40
              3.1.4.2 For first year students, (i) a minimum reporting SPI of
              6.0 for general category students and (ii) a minimum reporting SPI
              of 5.5 for SC/ST students, at the end of the first semester of the
              programme shall be the essential requirement for the award of MCM
              Scholarship. 3.1.4.3 Each renewal of the award of the MCM
              Scholarship shall require fulfillment of the criteria of merits
              and means (Section 2.1 and 2.2). 3.1.4.4 Fulfillment of merit as
              well as means criteria does not automatically ensure the award of
              MCM Scholarship to a given student. In case of more applications
              being submitted than the available number of scholarships, the
              award of MCM Scholarships shall depend on liabilities of parents
              under current social conditions. Thus, depending on the quality
              and quantity of applications received, the minimum CPI/SPI
              requirement, as index of merit, may be raised by the SPACS for the
              set of applications coming from similar social conditions. 3.1.4.5
              Award of the MCM Scholarships shall be for a period of one year.
              However, the same may be renewed by SPACS on the submission of a
              fresh application in the subsequent year. 3.1.4.6 The total
              duration of MCM scholarship to a given student shall not exceed 45
              months. 3.1.4.5 Students who are on leave for a semester shall not
              be eligible for receiving the MCM Scholarship, if awarded, during
              that semester.
            </Text>
          </>
        )}
        {desc === 2 && (
          <>
            <Title order={2}>DSM Proficiency Gold Medal</Title>
            <Divider my="sm" />
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, adipisci. Aspernatur eveniet temporibus repellendus
              asperiores obcaecati, dolorem cum dicta iusto a maiores, quia
              accusamus. Fuga.
            </Text>
          </>
        )}
        {desc === 3 && (
          <>
            <Title order={2}>Director’s Gold Medal</Title>
            <Divider my="sm" />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis saepe similique praesentium doloremque iusto minima
              amet vero sit eveniet corporis omnis eaque nobis libero, fugit
              provident eligendi, ratione ullam! Labore, libero magni veniam
              repellendus cupiditate soluta omnis aut reprehenderit dignissimos
              cum sed earum perferendis asperiores atque maiores molestias sequi
              totam? A inventore error expedita, quidem dolorum ipsum minus esse
              voluptates ea, dolorem, adipisci veritatis commodi atque. Mollitia
              quam ratione assumenda, consectetur illum nemo laboriosam qui
              harum dolorem accusantium provident. Neque, fugit asperiores
              molestiae totam velit autem repellat, accusamus impedit officia,
              sint eum nisi magni perferendis cupiditate quibusdam tenetur
              corrupti sit.
            </Text>
          </>
        )}
        {desc === 4 && (
          <>
            <Title order={2}>Director’s Silver Medal</Title>
            <Divider my="sm" />
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nihil
              ipsum delectus atque, numquam repellendus. Corrupti soluta
              assumenda omnis, suscipit impedit maiores eius doloremque
              laboriosam! Possimus delectus tempora nisi minus ducimus eius a
              sit necessitatibus quia voluptatum, ipsam itaque voluptatem maxime
              adipisci laboriosam architecto molestiae quibusdam unde. Omnis eum
              laboriosam deleniti tempora soluta, dolore ex perspiciatis,
              praesentium iste error esse dolorum, magni a consequatur animi
              nihil rem perferendis quae? Consequuntur!
            </Text>
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
}

export default AwardsAndScholarshipCatalog;
