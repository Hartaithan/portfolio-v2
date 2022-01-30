import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import ThreeJS from "./components/ThreeJS";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";

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
