import React from "react";
import styles from "./Contact.module.css";
import commonStyle from "../../commonStyles.module.css";
import LinkedIn from "../../assets/linkedin.svg";
const Contact = () => {
  return (
    <div id="contact" className={styles.Contact}>
      <div className={commonStyle.title}>Contact</div>
      <div className={styles.content}>
        <div className={styles.title}>Student Coordinators</div>
        <div className={styles.name}>
          Mr.C.Arun : <span className={styles.num}>9360144240</span>
        </div>
        <div className={styles.name}>
          Mr.D.Ramanaa : <span className={styles.num}>8778144483</span>
        </div>
      </div>

      <div className={styles.copyrights}>&#169; DECRA 2024</div>
      <h5>
        Developed by
        <a href="https://www.linkedin.com/in/codewithmurali/" target="_blank">
          <img src={LinkedIn} alt="" width={"14px"} height={"14px"} />
        </a>
      </h5>
      <h5>
        Designed by
        <a href="https://www.linkedin.com/in/shanmugam-v-/" target="_blank">
          <img src={LinkedIn} alt="" width={"14px"} height={"14px"} />
        </a>
      </h5>
    </div>
  );
};

export default Contact;
