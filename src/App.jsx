import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import Button from "./components/common/Button/Button";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Hidden from "../src/components/Hidden/Hidden";
import MainEvents from "./components/MainEvents/MainEvents";
// import Faq from "../src/components/Faq/Faq";
import Homepage from "./pages/Homepage";
import SingleEventPage from "./components/SingleEventPage/SingleEventPage";
import Leaderboard from "./pages/PrevEvent";
import AboutPage from "./pages/AboutPage";
import Register from "./components/common/Register/Register";
import ContactUs from "./components/ContactUs/ContactUs";
import Loading from "./components/common/Loading/Loading";
import "./App.css";
import PrevEvent from "./pages/PrevEvent";
import metallicSound from "./assets/clicksound.mp3";
import backgroundMusic from "./assets/backgroundMusic.mp3";


const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);
  useEffect(() => {});

  useEffect(() => {
    const playSound = () => {

      const audio = new Audio(backgroundMusic);
      audio.loop = true;
      audio.play();
    };
    playSound();

   

    return () => {
     
    };
  }, []);



  useEffect(() => {
    const playSound = () => {
      const audio = new Audio(metallicSound);
      audio.play();
    };

    document.addEventListener('click', playSound);

    return () => {
      document.removeEventListener('click', playSound);
    };
  }, []);




  return (
    <>
      {loading ? (
        <Loading />
      ) : (
          <>

            {/*<Popup />*/}

            <Navbar/>

              <Routes location={location} key={location.key} >
                <Route path="/" element={<Homepage/>}/>
                <Route path="/events" element={<MainEvents/>}/>
                <Route path="/events/:eventId" element={<SingleEventPage/>}/>
                <Route path="/crescendo23" element={<PrevEvent/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                {/*<Route path="*" element={<NotFound />}></Route> *!/*/}
                {/* <Route path="/" element={<Landing />}></Route>  */}
                {/* <Route path="/" element={<Faq />}></Route>  */}
              </Routes>
              <Footer/>
          </>
      )}
    </>
  );
};

export default App;
