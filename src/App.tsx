import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation/Navigation";
import ThreeJS from "./components/ThreeJS/ThreeJS";

import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import HomePage from "./pages/Home/Home";
import WorksPage from "./pages/Works/Works";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes key="routes">
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <ThreeJS />
    </>
  );
};

export default App;
