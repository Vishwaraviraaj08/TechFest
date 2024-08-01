import React from 'react'
import classes from "./ContactUs.module.css"
import Button from "../common/Button/Button"
import Profile from "../ProfileCard/Profile";

const ContactUs = () => {
    return (<>
      <div className={classes.background}>
        <div style={{marginTop: '10%'}}>&nbsp;</div>
        <h1 style={{color: 'white', fontSize: '4rem', margin:' 10% 3% 3% 3%'}}>Event Coordinators</h1>
        <div className={"profile-secretary"}
             style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10%'}}>

          <Profile data={{
            name: "Yathish Kumar",
            imageUrl: "",
            designation: "ChairPerson",
            phone: "9360269160",
            mail: "sec21it179@sairamtap.edu.in",
            backgroundCoverImage: ""
          }}/>
          <Profile data={{
            name: "Kiran Kumar",
            imageUrl: "",
            designation: "Treasurer",
            phone: "9361505517",
            mail: "sec21it177@sairamtap.edu.in",
            backgroundCoverImage: ""
          }}/>
        </div>
        <h1 style={{color: 'white', fontSize: '4rem', margin:'3%'}}>Event Secretaries</h1>


        <div className={"profile-secretary"}
             style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10%'}}>

          <Profile data={{
            name: "Abhishek Obli",
            imageUrl: "",
            designation: "Secretary",
            phone: "9655236550",
            mail: "sec21it109@sairamtap.edu.in",
            backgroundCoverImage: ""
          }}/>
          <Profile data={{
            name: "HariHaran",
            imageUrl: "",
            designation: "Secretary",
            phone: "9342801642",
            mail: "sec21it052@sairamtap.edu.in",
            backgroundCoverImage: ""
          }}/>
          <Profile data={{
            name: "Naveen Kumar",
            imageUrl: "",
            designation: "Secretary",
            phone: "9884106752",
            mail: "sec21it057@sairamtap.edu.in",
            backgroundCoverImage: ""
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
                <textarea className={classes.message}>Enter text Here</textarea>
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