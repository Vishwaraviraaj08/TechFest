import React from 'react'
import classes from "./ContactUs.module.css"
import Button from "../common/Button/Button"
import Profile from "../ProfileCard/Profile";

const ContactUs = () => {
    return (<>
      <div className={classes.background}>
        <div style={{marginTop: '10%'}}>&nbsp;</div>
        <h1 style={{color: 'white', fontSize: '4rem', margin:' 10% 3% 3% 3%'}}>OFFICE BEARERS</h1>
        <div className={"profile-secretary"}
             style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10%'}}>

          <Profile data={{
            name: "Yathish Kumar",
            imageUrl: "/Organizers/Yathish.jpg",
            designation: "ChairPerson",
            phone: "9360269160",
            mail: "sec21it179@sairamtap.edu.in",
            backgroundCoverImage: "https://th.bing.com/th/id/OIP.5TxZKPW_N52nc1OjKrA2YgHaEw?rs=1&pid=ImgDetMain"
          }}/>
          <Profile data={{
            name: "Kiran Kumar",
            imageUrl: "/Organizers/Kiran.jpg",
            designation: "Treasurer",
            phone: "9361505517",
            mail: "sec21it177@sairamtap.edu.in",
            backgroundCoverImage: "https://th.bing.com/th/id/OIP.JA6d8xbMDX97cEz9xAAzhwHaEo?w=525&h=328&rs=1&pid=ImgDetMain"
          }}/>
        </div>



        <div className={"profile-secretary"}
             style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10%'}}>

          <Profile data={{
            name: "Abhishek Obli",
            imageUrl: "/Organizers/Obli.png",
            designation: "Secretary",
            phone: "9655236550",
            mail: "sec21it109@sairamtap.edu.in",
            backgroundCoverImage: "https://th.bing.com/th/id/OIP.d0P6wkVcQXrflDByh9QD9wAAAA?rs=1&pid=ImgDetMain"
          }}/>
          <Profile data={{
            name: "HariHaran",
            imageUrl: "/Organizers/Hari.png",
            designation: "Secretary",
            phone: "9342801642",
            mail: "sec21it052@sairamtap.edu.in",
            backgroundCoverImage: "https://th.bing.com/th/id/OIP.vten8hXB10zmVRpJKmCfRQHaE9?w=626&h=419&rs=1&pid=ImgDetMain"
          }}/>
          <Profile data={{
            name: "Naveen Kumar",
            imageUrl: "/Organizers/Naveen.jpg",
            designation: "Secretary",
            phone: "6374974153",
            mail: "sec21it057@sairamtap.edu.in",
            backgroundCoverImage: "https://img.freepik.com/premium-photo/hallway-with-neon-lights-wall_787273-1422.jpg"
          }}/>
        </div>




        {/* <div className={classes.registerForm}> */}
        <div className={classes.card}>
          <div className={classes.card2}>
            <h1 className={classes.heading}>Contact Us</h1>
            <div className={classes.userData}>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Name<span className={classes.mandatory}>*</span>
                </label>
                <input className={classes.input}/>
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Email<span className={classes.mandatory}>*</span>
                </label>
                <input className={classes.input}/>
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Message<span className={classes.mandatory}>*</span>
                </label>
                <textarea className={classes.message} placeholder={"Enter text .. .. .."}></textarea>
              </div>
            </div>
            <div className={classes.button}><Button label="Send"/></div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>)
}

export default ContactUs