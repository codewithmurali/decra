import React from "react";
import { useState } from "react";
import style from "./popup.module.css";
const Popup = () => {
  const [popup, setPopup] = useState(true);
  return (
    <div className={`${popup ? style.popup : style.popup__inactive}`}>
      <h5 className={style.popup__msg}>
        We value the interest of "Young Minds". So we have extended the paper
        submission date till AUGUST 21.08.2023
      </h5>
      <div className={style.cancel} onClick={() => setPopup(!popup)}>
        X
      </div>
    </div>
  );
};

export default Popup;
