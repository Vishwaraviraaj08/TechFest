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
import Leaderboard from "./pages/Leaderboard";
import AboutPage from "./pages/AboutPage";
import Register from "./components/common/Register/Register";
import ContactUs from "./components/ContactUs/ContactUs";
import Loading from "./components/common/Loading/Loading";
import "./App.css";


const App = () => {
  const location = useLocation();
  const [transition, setTransition] = useState("fade-enter");

  useEffect(() => {
    window.scrollTo(0, 0);
    setTransition("fade-enter");
    const timer = setTimeout(() => setTransition("fade-enter-active"), 1000);
    return () => clearTimeout(timer);
  }, [location]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);
  useEffect(() => {});
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
          <>

            {/*<Popup />*/}

            <Navbar/>
            <div className={transition}>
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/events" element={<MainEvents/>}/>
                <Route path="/events/:eventId" element={<SingleEventPage/>}/>
                <Route path="/leaderboard" element={<Leaderboard/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/hidden" element={<Hidden/>}/>
                {/*   <Route path="/leaderboard/:eventId" element={<Leaderboard />} />
                <Route path="*" element={<NotFound />}></Route> */}
                {/* <Route path="/" element={<Landing />}></Route>  */}
                {/* <Route path="/" element={<Faq />}></Route>  */}
              </Routes>
              <Footer/>
            </div>
          </>
      )}
    </>
  );
};

export default App;
