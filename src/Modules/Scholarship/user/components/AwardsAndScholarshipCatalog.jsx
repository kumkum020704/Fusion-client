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
            National Prices
          </List.Item>
        </List>
      </div>

      <div className={styles.contentContainer}>
        {desc === 1 && (
          <>
            <Title order={2}>Merit-Cum-Means</Title>
            <Divider my="sm" />
            <Text>
              {/* MCM Scholarship Overview <br /> */}
              The MCM (Merit-Cum-Means) Scholarship is designed to support
              students from economically disadvantaged backgrounds while
              encouraging academic excellence. Eligibility Criteria: Candidates
              holding any other scholarship from a different source are not
              eligible to apply for the MCM Scholarship unless they surrender
              their existing scholarship. The Convener, SPACS will invite
              applications for the MCM Scholarship at the beginning of each
              academic year for students in all years except first-year
              students. Eligible candidates must apply using the prescribed
              format, available in this document, on the Institute’s website,
              and from the Academic Section. Completed applications, along with
              supporting documents specified in Annexures I through V, must be
              submitted before the deadline set by the Convener, SPACS. An
              income affidavit for the year preceding the application year must
              be submitted by the parent or guardian along with the completed
              application. First-year students may apply for the MCM Scholarship
              at the beginning of the second semester of their program. In cases
              where a student's financial circumstances change unexpectedly—such
              as the death or retirement of the earning parent(s)—and if
              unutilized MCM scholarships are available, the Convener, SPACS may
              accept applications at any time during the academic year. If
              awarded, the scholarship will take effect from the month the
              circumstances change. Award Duration and Conditions: For students
              other than first-year students, a minimum Cumulative Performance
              Index (CPI) of 6.0 for general category students and 5.5 for SC/ST
              category students is required at the end of the preceding academic
              year to qualify for the scholarship. First-year students must
              achieve a minimum Semester Performance Index (SPI) of 6.0 for
              general category students and 5.5 for SC/ST students at the end of
              their first semester. Each renewal of the MCM Scholarship requires
              fulfillment of both merit and means criteria as outlined in the
              relevant sections. Meeting the merit and means criteria does not
              guarantee the award of the scholarship. In cases where
              applications exceed available scholarships, the decision will
              depend on the financial liabilities of the applicants’ parents
              under current social conditions. Consequently, the minimum CPI/SPI
              requirements may be adjusted by SPACS based on the quality and
              quantity of applications from similar social backgrounds. The MCM
              Scholarship will be awarded for one year but may be renewed by
              SPACS upon submission of a new application in subsequent years.
              The total duration of the MCM Scholarship for a single student
              shall not exceed 45 months. Students on leave for a semester will
              not be eligible to receive the MCM Scholarship during that
              semester if awarded.
            </Text>
          </>
        )}
        {desc === 2 && (
          <>
            <Title order={2}>DSM Proficiency Gold Medal</Title>
            <Divider my="sm" />
            <Text>
              4.3 D&M Proficiency Gold Medals
              <br />
              4.3.1 Design and Manufacturing Proficiency Gold Medals are awarded
              at the time of Institute’s Convocation for the best
              cross-disciplinary project from among the graduating BTech
              students and the best cross-disciplinary thesis from among the
              graduating MTech / MDes / PhD students. Award of design and
              manufacturing proficiency gold medal (D&MPGM) is applicable for
              BTP/PBI or Design and Fabrication projects.
              <br />
              4.3.2 The award of D&M Proficiency Gold Medals shall be decided by
              the separate committee appointed for this purpose by the Chairman,
              Academic Senate which will seek applications after finalizing a
              short listing criterion. After short listing of applications, the
              committee shall call all the short listed applicants for a
              presentation/demonstration.
              <br />
              4.3.3 D&M Proficiency Gold Medals may not be awarded if
              projects/theses submitted for the award are found to have an
              inadequate cross-disciplinary content.
              <br />
              4.3.4 The D&M Proficiency Gold Medals shall be made out of 15 gm
              of 18 carat gold.
              <br />
              4.3.5 In the event of a group being awarded the best
              cross-disciplinary project, each individual student shall be
              awarded the medal provided the student satisfies following
              eligibility criteria for the award. (a) The students must have at
              least a CPI of 6.5. (b) At the time of application, there should
              not be any backlog of courses for the student. (c) Student’s grade
              in the project must be A, A+ or S. TEST.
              <br />
                       
            </Text>
          </>
        )}
        {desc === 3 && (
          <>
            <Title order={2}>Director’s Gold Medal</Title>
            <Divider my="sm" />
            <Text>
              4.2 Director's Gold Medals
              <br />
              4.2.1 Director's Gold Medals (DGMs), to be presented at the
              Institute Convocation every year, shall be awarded for the best
              all round performance from among the graduating (a) B Tech batch
              and (b) M Tech/M Des/PhD students. Students of all
              disciplines/programme shall be eligible for the award of DGM.
              <br />
              4.2.2 The all-round performance shall be judged by a separate
              committee appointed by the Chairman Senate. Criteria for short
              listing the candidates shall be laid down by the committee as per
              Section 2.
              <br />
              4.1 However, a reporting CPI of 8.0 shall be the minimum
              requirement for the award of the Director's Gold Medal.
              <br />
              4.2.3 The student receiving the award should not have been
              involved in any act of indiscipline (except warning under clause
              3.2.2.1 of SACS manual) during her/his entire academic programme.
              <br />
              4.2.4 The DGMs shall be made out of 15 gm of 18 carat gold.
              <br />
            </Text>
          </>
        )}
        {desc === 4 && (
          <>
            <Title order={2}>Director’s Silver Medal</Title>
            <Divider my="sm" />
            <Text>
              4.6 Director's Silver Medals
              <br />
              4.6.1 Director's Silver Medals (DSMs) shall be presented at the
              time of Institute’s Convocation for the outstanding performance in
              (i) Games & Sports activities and (ii) Cultural activities from
              among the graduating undergraduate and postgraduate students.
              <br />
              4.6.2 The award of DSMs shall be decided by the separate committee
              appointed for this purpose by the Chairman, Academic Senate. The
              committee shall lay down the criteria for short listing the
              candidates before calling them for an interview.
              <br />
              4.6.3 Director's Silver Medals shall be made out of 15 gm silver.
              <br />
            </Text>
          </>
        )}
        {desc === 5 && (
          <>
            <Title order={2}>National Prices</Title>
            <Divider my="sm" />
            <Text>
              4.7 National Prizes and Certificates of Merit
              <br />
              4.7.1 National Prizes and Certificates of Merit shall be awarded
              to 7 percent of the students of each undergraduate and
              postgraduate batch for excellent academic performance in an
              academic year. In the first two years, the 7 percent shall be
              calculated for the entire B Tech batch, whereas for the third year
              the award shall be made for each discipline taking into account
              their respective strengths. For PG student, the 7 percent shall be
              calculated based on the academic performance of the first two
              semester of PG program for each discipline taking into account
              their respective strengths.
              <br />
              4.7.2 The National Prize may be awarded to a student irrespective
              of whether he/she is a recipient of any other scholarship or not.
              <br />
              4.7.3 The value of the National Prize shall be as prescribed from
              time to time, by the Ministry of Human Resources and Development8
              . 8 The present amount is Rs. 2000/-.
              <br />
              4.7.4 In calculating the actual number of awards to be made in any
              year or for any department, any fraction shall usually be rounded
              off to the next integer. However, this may not be done in those
              cases where there is a significant difference in the performance
              level of the students.
              <br />
              4.7.5 The award shall, in principle, be given only on the basis of
              the annual performance. (By dividing credits earned in two regular
              semester with total credits for two semester) Further the award
              may not be made for any department having student strength of less
              than 5. It may also not be made if the highest CPI for any
              department is considerably lower than the performance levels at
              which the award is being made for other departments or minimum CPI
              limit of 8.5.
              <br />
            </Text>
          </>
        )}
      </div>
    </Container>
  );
}

export default AwardsAndScholarshipCatalog;
