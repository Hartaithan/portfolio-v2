import React from "react";
import "./works.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import Carousel from "../../components/Carousel/Carousel";
import useTitle from "../../hooks/useTitle";

const Works: React.FC = () => {
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

export default Works;
