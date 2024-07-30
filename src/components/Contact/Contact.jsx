import Faq from "../Faq/Faq";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>
          <Faq />


          <div className={classes.mapBox}>

            <iframe
                className={classes.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1922795368805!2d80.0580471!3d12.9595448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f52035349a91%3A0xf221db2ccc5e4ce6!2sSairam%20Campus!5e0!3m2!1sen!2sin!4v1722347154024!5m2!1sen!2sin!"
                loading="lazy"
                mapType="satellite"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
