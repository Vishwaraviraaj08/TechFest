import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Loading from "./components/common/Loading/Loading";
import Homepage from "./pages/Homepage";
import MainEvents from "./components/MainEvents/MainEvents";
import SingleEventPage from "./components/SingleEventPage/SingleEventPage";
import PrevEvent from "./pages/PrevEvent";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./components/ContactUs/ContactUs";
import backgroundMusic from "/backgroundMusic.mp3";
import metallicSound from "./assets/clicksound.mp3";
import "./App.css";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [audioInitialized, setAudioInitialized] = useState(false);

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Set loading state
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Play background music on user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!audioInitialized) {
        const audio = new Audio(backgroundMusic);
        audio.loop = true;
        audio.play().catch(error => console.log("Failed to play background music:", error));
        setAudioInitialized(true);
      }
    };

    // Attach event listener to user interaction
    // document.addEventListener('click', handleUserInteraction);
    const dummy  = document.createElement("div");
    dummy.addEventListener('click', handleUserInteraction);
    dummy.click();

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [audioInitialized]);

  // Play metallic sound on click
  useEffect(() => {
    const playSound = () => {
      const audio = new Audio(metallicSound);
      audio.play().catch(error => console.log("Failed to play metallic sound:", error));
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
          <Navbar />
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<MainEvents />} />
            <Route path="/events/:eventId" element={<SingleEventPage />} />
            <Route path="/crescendo23" element={<PrevEvent />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
