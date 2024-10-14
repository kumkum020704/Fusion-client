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
              4.3 D&M Proficiency Gold Medals<br/>
              4.3.1 Design and Manufacturing Proficiency Gold Medals are awarded at the time of Institute’s Convocation for the best cross-disciplinary project from among the graduating BTech students and the best cross-disciplinary thesis from among the graduating MTech / MDes / PhD students. Award of design and manufacturing proficiency gold medal (D&MPGM) is applicable for BTP/PBI or Design and Fabrication projects.<br/>
              4.3.2 The award of D&M Proficiency Gold Medals shall be decided by the separate committee appointed for this purpose by the Chairman, Academic Senate which will seek applications after finalizing a short listing criterion. After short listing of applications, the committee shall call all the short listed applicants for a presentation/demonstration.<br/>
              4.3.3 D&M Proficiency Gold Medals may not be awarded if projects/theses submitted for the award are found to have an inadequate cross-disciplinary content.<br/>
              4.3.4 The D&M Proficiency Gold Medals shall be made out of 15 gm of 18 carat gold.<br/>
              4.3.5 In the event of a group being awarded the best cross-disciplinary project, each individual student shall be awarded the medal provided the student satisfies following eligibility criteria for the award. (a) The students must have at least a CPI of 6.5. (b) At the time of application, there should not be any backlog of courses for the student. (c) Student’s grade in the project must be A, A+ or S. TEST.<br/>
            </Text>
          </>
        )}
        {desc === 3 && (
          <>
            <Title order={2}>Director’s Gold Medal</Title>
            <Divider my="sm" />
            <Text>
              4.2 Director's Gold Medals<br/>
              4.2.1 Director's Gold Medals (DGMs), to be presented at the Institute Convocation every year, shall be awarded for the best all round performance from among the graduating (a) B Tech batch and (b) M Tech/M Des/PhD students. Students of all disciplines/programme shall be eligible for the award of DGM.<br/>
              4.2.2 The all-round performance shall be judged by a separate committee appointed by the Chairman Senate. Criteria for short listing the candidates shall be laid down by the committee as per Section 2.<br/>
              4.1 However, a reporting CPI of 8.0 shall be the minimum requirement for the award of the Director's Gold Medal.<br/>
              4.2.3 The student receiving the award should not have been involved in any act of indiscipline (except warning under clause 3.2.2.1 of SACS manual) during her/his entire academic programme.<br/>
              4.2.4 The DGMs shall be made out of 15 gm of 18 carat gold.<br/>
            </Text>
          </>
        )}
        {desc === 4 && (
          <>
            <Title order={2}>Director’s Silver Medal</Title>
            <Divider my="sm" />
            <Text>
              4.6 Director's Silver Medals<br/>
              4.6.1 Director's Silver Medals (DSMs) shall be presented at the time of Institute’s Convocation for the outstanding performance in (i) Games & Sports activities and (ii) Cultural activities from among the graduating undergraduate and postgraduate students.<br/>
              4.6.2 The award of DSMs shall be decided by the separate committee appointed for this purpose by the Chairman, Academic Senate. The committee shall lay down the criteria for short listing the candidates before calling them for an interview.<br/>
              4.6.3 Director's Silver Medals shall be made out of 15 gm silver.<br/>
            </Text>
          </>
        )}
        {desc === 5 && (
          <>
            <Title order={2}>Notional Prices</Title>
            <Divider my="sm" />
            <Text>
              4.7 Notional Prizes and Certificates of Merit<br/>
              4.7.1 Notional Prizes and Certificates of Merit shall be awarded to 7 percent of the students of each undergraduate and postgraduate batch for excellent academic performance in an academic year. In the first two years, the 7 percent shall be calculated for the entire B Tech batch, whereas for the third year the award shall be made for each discipline taking into account their respective strengths. For PG student, the 7 percent shall be calculated based on the academic performance of the first two semester of PG program for each discipline taking into account their respective strengths.<br/>
              4.7.2 The Notional Prize may be awarded to a student irrespective of whether he/she is a recipient of any other scholarship or not.<br/>
              4.7.3 The value of the Notional Prize shall be as prescribed from time to time, by the Ministry of Human Resources and Development8 . 8 The present amount is Rs. 2000/-.<br/>
              4.7.4 In calculating the actual number of awards to be made in any year or for any department, any fraction shall usually be rounded off to the next integer. However, this may not be done in those cases where there is a significant difference in the performance level of the students.<br/>
              4.7.5 The award shall, in principle, be given only on the basis of the annual performance. (By dividing credits earned in two regular semester with total credits for two semester) Further the award may not be made for any department having student strength of less than 5. It may also not be made if the highest CPI for any department is considerably lower than the performance levels at which the award is being made for other departments or minimum CPI limit of 8.5.<br/>
            </Text>
          </>
        )}
      </div>
    </Container>
  );
}

export default AwardsAndScholarshipCatalog;
