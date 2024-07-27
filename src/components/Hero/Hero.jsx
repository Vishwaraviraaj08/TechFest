import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";

const Hero = () => {
  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <h1 className={classes.heading}>UURJA 2K24</h1>
          <h4 className={classes.caption}>Let's make a tech move!</h4>
          <p className={classes.date}>March 29-31, 2024</p>
          <Link
            className={classes.anchorBtn}
            rel="noopener noreferrer"
            to="https://forms.gle/So9RxUsNnL9RcnVPA"
          >
            <Button
              link="https://forms.gle/So9RxUsNnL9RcnVPA"
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

// import React from "react";
// import classes from "./Hero.module.css";
// import { Link } from "react-router-dom";
// import Button from "../common/Button/Button";

// const Hero = () => {
//   // const [countDays, setDays] = useState(false);
//   // const [countHours, setHours] = useState(false);
//   // const [countMinutes, setMinutes] = useState(false);
//   // const [countSeconds, setSeconds] = useState(false);

//   // let interval = useRef();

//   // const startTimer = () => {
//   //   const countdownDate = new Date("February 13 2023 18:00:00").getTime();

//   //   interval = setInterval(() => {
//   //     const now = new Date().getTime();
//   //     const distance = countdownDate - now;

//   //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   //     const hours = Math.floor(
//   //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   //     );
//   //     const minutes = Math.floor((distance / 1000 / 60) % 60);
//   //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   //     if (distance < 0) {
//   //       //
//   //       clearInterval(interval);
//   //     } else {
//   //       setDays(days);
//   //       setHours(hours);
//   //       setMinutes(minutes);
//   //       setSeconds(seconds);
//   //     }
//   //   }, 1000);
//   // };

//   // useEffect(() => {
//   //   startTimer();
//   //   return () => {
//   //     clearInterval(interval);
//   //   };
//   // });

//   return (
//     <section id="home" className={classes.hero}>
//       <div className={classes.herobox}>
//         <div className={classes.headerbox}>
//           {/* <h1 className={classes.heading}>Sambhav</h1> */}
//           <h1 style={{ fontSize: '100px',fontStyle: 'italic', color: 'white', fontWeight: 'bold' }}>URJAA 2K24</h1>

//           <h4 className={classes.caption} style={{fontWeight: 'bold' }} >Let&apos;s make a tech move!</h4>
//           <p className={classes.date}>March 29-31, 2024</p>
//           <Link
//             className={classes.anchorBtn}
//             rel="noopener noreferrer"
//             to="/events"
//           >
//             <Button
//               link="https://forms.gle/So9RxUsNnL9RcnVPA"
//               label="Explore Our Events"
//               className={classes.btn}
//             ></Button>
//           </Link>
//         </div>

//         {/* <div className={classes.countdownbox}>
//           <div className={classes.countdown}>
//             <p>{countDays}</p>
//             <p>
//               <small>days</small>
//             </p>
//           </div>

//           <span className={classes.column}>:</span>

//           <div className={classes.countdown}>
//             <p>{countHours}</p>
//             <p>hours</p>
//           </div>

//           <span className={classes.column}>:</span>

//           <div className={classes.countdown}>
//             <p>{countMinutes}</p>
//             <p>min</p>
//           </div>

//           <span className={classes.column}>:</span>
//           <div className={classes.countdown}>
//             <p>{countSeconds}</p>
//             <p>sec</p>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;
