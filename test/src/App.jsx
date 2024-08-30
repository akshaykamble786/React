import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Mobiles from "./Mobiles";

function App() {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/mobiles" element={<Mobiles />} />
      </Routes>
    </Router>
  );
}

export default App;
