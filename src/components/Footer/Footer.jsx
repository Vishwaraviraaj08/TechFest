import React from "react";
import classes from "./Footer.module.css";

// const sambhavitwitter=''

const insta = "https://www.instagram.com/xtrofest_5.0?igsh=d3lmdThpMWhiZ2Vw";
const linkedin = "https://www.linkedin.com/in/sairam-secit-417383218/?originalSubdomain=in";

const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <img
                className={classes.footer_sambhav_image}
                src={"/Flarendo_logo.png"}
                alt="Logo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>SAMBHAV'23</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description} style={{fontSize:'1.5rem', textAlign:'justify'}}>
            FLARENDO '24 is One of the Largest Technical festival of Information Technology Department by Sri Sairam Engineering College. Let&apos;s
            make a Tech move.
          </p>
        </div>
        <div className={classes.footer_first}>

          <p className={classes.footer_sambhav_description}>
            Get the latest updates about events and much more ..
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={insta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>
            </div>
    
            <div>
              <a
                href={"https://it.sairam.edu.in/"}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/domain--v1.png"
                  alt="zsdsff"
                />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading} style={{fontFamily: 'sans-serif'}}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>Sri Sairam Engineering College, West Tambaram</p>
            </div>
          </div>
          {/* <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                alt=""
              />
            </div>
            <div>
              <p>044 - 2251 2222</p>
            </div>
          </div> */}
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <p className={classes.mail}>flarendo2024@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
