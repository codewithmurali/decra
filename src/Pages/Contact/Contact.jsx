import React from "react";
import styles from "./Contact.module.css";
import commonStyle from "../../commonStyles.module.css";
import decra from "../../assets/logo.png";
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

      <div className={styles.copyrights}>&#169; DECRA 2023</div>
    </div>
  );
};

export default Contact;
