import React from "react";
import styles from "./Prizes.module.css";
import commonStyles from "../../commonStyles.module.css";
import FirstPrize from "../../assets/gold-medal.svg";
import SecondPrize from "../../assets/silver-medal.svg";
import ThirdPrize from "../../assets/bronze-medal.svg";
const Prizes = () => {
  return (
    <div className={`${commonStyles.outer__layout} ${styles.Prizes}`}>
      <h2 className={commonStyles.title}>Prizes</h2>
      <p className={`${commonStyles.description} ${styles.description}`}>
        Dear Participants for your information For technical symposium
      </p>
      <div className={styles.prize_container}>
        <div className={styles.prize}>
          <h3 className={styles.subtitle}>Paper presentation </h3>
          <ul className={styles.prize__list}>
            <li>
              <img src={FirstPrize} alt="First Prize" />
              <span>3000</span>
            </li>
            <li>
              <img src={SecondPrize} alt="Second Prize" />
              <span>2000</span>
            </li>
            <li>
              <img src={ThirdPrize} alt="Third Prize" />
              <span>1000</span>
            </li>
          </ul>
        </div>
        <div className={styles.prize}>
          <h3 className={styles.subtitle}>Reverse Engineering </h3>
          <ul className={styles.prize__list}>
            <li>
              <img src={FirstPrize} alt="First Prize" />
              <span>500</span>
            </li>
            <li>
              <img src={SecondPrize} alt="Second Prize" />
              <span>250</span>
            </li>
          </ul>
        </div>
        <div className={styles.prize}>
          <h3 className={styles.subtitle}>Techspool</h3>
          <ul className={styles.prize__list}>
            <li>
              <img src={FirstPrize} alt="First Prize" />
              <span>500</span>
            </li>
            <li>
              <img src={SecondPrize} alt="Second Prize" />
              <span>250</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.prize__note}>
        <h3 className={styles.__note__}>Note:</h3>
        <ul>
          <li>Certificate is only for paper presentation</li>
          <li>Partcipants will get only the cash prize for other events</li>
        </ul>
      </div>
    </div>
  );
};

export default Prizes;
