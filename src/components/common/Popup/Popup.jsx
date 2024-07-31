import React, { useState, useEffect } from "react";
import classes from "./Popup.module.css";
import Button from "../Button/Button";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);


  function handleClose() {
    setShowPopup(false);
  }

  return (
      <>
        {showPopup && (
        <>
          <div className={classes.blur}>
            <div className={classes.card}>
              <img className={classes.grabbit_image} src={"https://pngimg.com/uploads/smiley/smiley_PNG74.png"} alt="logo" />
              <h2 className={classes.text}>Explore Flarendo'24 with Fun !</h2>
              <div className={classes.btn_container}>
                <Button
                  onClick={handleClose}
                  link="/"
                  label="Explore our Events"
                />
                <div style={{margin: '100px'}}/>
              </div>
            </div>
          </div>
        </>)}

      </>
  );
};

export default Popup;