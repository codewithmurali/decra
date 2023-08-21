import React from "react";

const Popup = () => {
  return (

    const clickBtn = document.getElementById("clickBtn");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");
    
    clickBtn.addEventListener('click', ()=>{
        popup.style.display = 'block';
    });
    closeBtn.addEventListener('click', ()=>{
        popup.style.display = 'none';
    });
    popup.addEventListener('click', ()=>{
        popup.style.display = 'none';
    });

  }
    <div>
      <div id="popup">
        <div class="popup-container">
          <div class="popup">
            <div class="close-popup" id="closeBtn">
              <a href="#">X</a>
            </div>
            <h2>Information</h2>
            <p>
              We value the interest of "Young Minds". So we have extended the
              paper submission date till AUGUST 21.08.2023
            </p>
            <a href="#" class="popup-btn">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
