import React, { useEffect } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
import { eventsData } from "../../assets/eventsData";
import ReactGA from "react-ga";

const MainEvents = () => {
  // const swup = new Swup({
  //   plugins: [
  //     new SwupOverlayTheme({
  //       color: "#2D2E82",
  //       duration: 600,
  //       direction: "to-right",
  //     }),
  //   ],
  // });
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading}>Events</h1>
        <img src="x" alt="" />
        <h1 className={classes.sub_heading}>Technical Events</h1>

        <div className={classes.events_container}>
          
          {eventsData.map((eventData, i) => {
            if(eventData.eventType=='Tech'){
              return <EventCard eventData={eventData} key={i} />;
            }
            
          })}
        </div>
        <h1 className={classes.sub_heading}>Cultural Events</h1>

        <div className={classes.events_container}>
        
          {eventsData.map((eventData, i) => {
if(eventData.eventType=='Cultural'){
  return <EventCard eventData={eventData} key={i} />;
}          })}
        </div>
        <h1 className={classes.sub_heading}>Sports Events</h1>

        <div className={classes.events_container}>
        
          {eventsData.map((eventData, i) => {
if(eventData.eventType=='Sports'){
  return <EventCard eventData={eventData} key={i} />;
}          })}
        </div>
      </div>
    </>
  );
};

export default MainEvents;
