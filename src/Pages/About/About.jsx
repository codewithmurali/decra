import React from "react";
import commonStyles from "../../commonStyles.module.css";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={`${commonStyles.outer__layout} ${styles.about}`} id="about">
      <div className={`${styles.card} ${commonStyles.common__card}`}>
        <h2 className={commonStyles.title}>About us</h2>
        <div className={styles.description}>
          The Department commenced in the year 2007 with an intake of 60 in the
          undergraduate program (B.E) Electronics and Communication Engineering.
          In the year 2012, the post graduate program (M.E) commenced with an
          intake of 18 in Applied Electronics and the intake for the B.E program
          was increased to 120. The permanent affiliation has been received for
          (B.E) Electronics and Communication Engineering from Anna University
          Chennai, from the academic year 2016-2017 onwards. In addition, the
          department has a research centre approved by Anna University, Chennai
          to enhance the research activities of students and faculty members. To
          create highly skilled, proficient and excellent Electronics and
          Communication Engineers having professional ethics, passion and
          competence to adapt to the latest transformations in technology.
        </div>
        <h2 className={commonStyles.title}>About Event</h2>
        <div className={styles.description}>
          TEKCLUSTER`23 - ELEVENTH NATIONAL LEVEL TECHNICAL SYMPOSIUM on 26th
          AUG 2023
        </div>
      </div>
    </div>
  );
};

export default About;
