import React from "react";
import classes from "./EventSection.module.css";
import Button from "../common/Button/Button";
import event from "./event.svg";

const EventSection = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            {/* <h3 className={classes.heading}>About</h3> */}
            <h2 className={classes.heading1}>EVENTS</h2>
            <p className={classes.para} style={{textAlign: 'justify'}}>
              FLARENDO '24 reflects the spirit of the festival and its mission to
              provide a platform for individuals to push their limits and
              challenge themselves to turn their ideas and innovative projects
              into reality. The festival offers a diverse range of technical
              events and competitions designed to showcase the talents and
              skills of participants while fostering creativity, teamwork, and
              problem-solving abilities. With its focus on technology and
              innovation, FLARENDO'24 truly embodies its name and serves as a
              catalyst for making the impossible possible.
            </p>

            <div className={classes.btn}>
              <Button link="/events" label="Explore" />
            </div>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={event} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventSection;
