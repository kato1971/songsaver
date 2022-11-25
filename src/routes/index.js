import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SongOverview from "../features/songs/SongOverview";
import AboutUs from "../pages/AboutUs";
// import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SongOverview />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Index;
