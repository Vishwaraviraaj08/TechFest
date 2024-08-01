import React from "react";
import classes from "./SingleEventPage.module.css";
// import sample from "../../assets/Events/sample.jpeg";
import Button from "../common/Button/Button";
import { useParams } from "react-router-dom";
import { eventsData } from "../../assets/eventsData";

const SingleEventPage = () => {
  const { eventId } = useParams();
  console.log(eventId);

  const requiredEvent = eventsData.find((event) => event.id === +eventId);
  const {
    name,
    image,
    description,
    rules,
    note,
    prizes,
    team,
    contactInfo,
    location,
    date,
    link,
    onSpot,
    disqualification,
  } = requiredEvent;

  return (
    <>

      <style>
        {
          `
          .animated-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 36px;
  border: 4px solid;
  border-color: transparent;
  font-size: 16px;
  background-color: inherit;
  border-radius: 100px;
  font-weight: 600;
  color: blue;
  box-shadow: 0 0 0 2px blue;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button svg {
  position: absolute;
  width: 24px;
  fill: blue;
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
  right: 16px;
  color:white;
}

.animated-button .arr-2 {
  left: -25%;
  color:white;
}

.animated-button .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
  position: relative;
  z-index: 1;
  transform: translateX(-12px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: white;
  border-radius: 12px;
}

.animated-button:hover .arr-1 {
  right: -25%;
  color: white;
}

.animated-button:hover .arr-2 {
  left: 16px;
  fill: white;
}

.animated-button:hover .text {
  transform: translateX(12px);
}

.animated-button:hover svg {
  fill: blue;
  color: white;
}

.animated-button:active {
  scale: 0.95;
  box-shadow: 0 0 0 4px blue;
}

.animated-button:hover .circle {
  width: 220px;
  height: 220px;
  opacity: 1;
}

          `
        }
      </style>
      <div className={classes.singleEvent}>
        <div className={classes.singleEventCard}>
          <div className={classes.col1}>
            <img className={classes.eventPoster} src={image} alt="eventName"/>

            <div className={"button"} style={{marginTop:'3rem'}}>
            <a href={"https://www.google.com"} target={"_blank"}>
            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">Register Event</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button>
            </a>
            </div>


          </div>
          <div className={classes.col2}>
            <h1 className={classes.eventHeading}>{name}</h1>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Description</h2>
              <p className={classes.content}>{description}</p>
            </div>
            <div className={classes.rowcol}>
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Team</h2>
                <p className={classes.content}>{team}</p>
              </div>
            </div>
            {prizes && (
                <div className={classes.subheading}>
                <h2 className={classes.headingp}>Prizes</h2>
                <ul>
                  {prizes?.map((prize, i) => {
                    return (
                      <li key={i} className={classes.content}>
                        {prize}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {rules && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Rules and Regulations</h2>
                <ul>
                  {rules?.map((rule, i) => {
                    return (
                      <li key={i} className={classes.content}>
                        {rule}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {disqualification && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Disqualification</h2>
                <ul>
                  {disqualification?.map((rule, i) => {
                    return (
                      <li key={i} className={classes.content}>
                        {rule}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className={classes.subheading}>
              <h2 className={classes.heading}>Location</h2>
              <p className={classes.content}>{location}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Date and Timing</h2>
              <p className={classes.content}>{date}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Contact Info</h2>
              {contactInfo?.map((contact, i) => {
                return (
                  <p key={i} className={classes.content}>
                    {contact}
                  </p>
                );
              })}
            </div>
            {note && (
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Note</h2>
                {note?.map(() => {
                  return <p className={classes.content}>{note}</p>;
                })}
              </div>
            )}
            {link !== "" ? (
              <Button hrefLink={link} label="Register" />
      
            ) : (
                <Button hrefLink={onSpot} label="Register" />
                )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;
