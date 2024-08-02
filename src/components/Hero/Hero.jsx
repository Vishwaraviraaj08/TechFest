import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";

const Hero = () => {
  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <h1 className={classes.heading} style={{textAlign:'center', marginBottom:'4rem'}}>FLARENDO '24</h1>
          <h4 className={classes.caption}>Let's make a tech move!</h4>
          <p className={classes.date}>August 28, 2024</p>
          <Link
            className={classes.anchorBtn}
            rel="noopener noreferrer"
            to="/events"
          >
            <Button
              link="/events"
              label="Explore Our Events"
              className={classes.btn}
            ></Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
