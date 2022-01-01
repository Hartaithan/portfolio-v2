import React from "react";
import "../styles/worksPage.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../animations";
import Carousel from "../components/Carousel";
import useTitle from "../hooks/useTitle";

const WorksPage: React.FC = () => {
  useTitle("Works");

  return (
    <motion.div
      className="works"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Carousel />
    </motion.div>
  );
};

export default WorksPage;
