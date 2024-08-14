import React from "react";
import { useState } from "react";
import style from "./popup.module.css";
const Popup = () => {
  const [popup, setPopup] = useState(true);
  return (
    <div className={`${popup ? style.popup : style.popup__inactive}`}>
      <h5 className={style.popup__msg}>
        We value the interest of "Young Minds". So we have extended the paper
        submission date till <span className={style.date}>21.03.2024.</span>
      </h5>
      <div className={style.cancel} onClick={() => setPopup(!popup)}>
        X
      </div>
    </div>
  );
};

export default Popup;
