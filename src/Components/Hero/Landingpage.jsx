import React from "react";
import hero from "../../assets/hero.mp4";
import styles from "./landingpage.module.css";

const Landingpage = () => {
  return (
    <div className={`${styles.landingpage} `} id="home">
      <div className={styles.overlay}></div>
      <video src={hero} autoPlay muted loop className={styles.video_bg} />
      <div className={styles.content}>
        <h1 className={`${styles.gradient__text}`}>TEKCLUSTER'23</h1>
        <h2 className={`${styles.gradient__text} ${styles.sub__title}`}>ECE</h2>
      </div>
    </div>
  );
};

export default Landingpage;
