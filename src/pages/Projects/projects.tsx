import { FC } from "react";
import "./projects.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import Carousel from "../../components/Carousel/Carousel";
import useTitle from "../../hooks/useTitle";

const Projects: FC = () => {
  useTitle("Projects");

  return (
    <motion.div
      className="projects"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Carousel />
    </motion.div>
  );
};

export default Projects;
