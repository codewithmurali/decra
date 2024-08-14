import React from "react";
import hero from "../../assets/hero.mp4";
import styles from "./landingpage.module.css";
import { Link } from "react-scroll";

const Landingpage = () => {
  return (
    <div className={`${styles.landingpage} `} id="home">
      <div className={styles.overlay}></div>
      <video src={hero} autoPlay muted loop className={styles.video_bg} />
      <div className={styles.content}>
        <h1 className={`${styles.gradient__text}`}>TEKCLUSTER'24</h1>
        <h2 className={`${styles.gradient__text} ${styles.sub__title}`}>ECE</h2>

        <div className={styles.submit}>
          <Link to="events" spy={true} smooth={true} offset={50} duration={500}>
            Register Here{" "}
          </Link>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 18"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-2"
              height="16px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
