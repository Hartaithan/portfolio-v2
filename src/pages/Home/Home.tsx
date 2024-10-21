import { FC, useState } from "react";
import "./home.scss";
import { AnimatePresence, motion } from "framer-motion";
import {
  buttonsAnimation,
  textAnimation,
  containerAnimation,
} from "../../animations";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Modal from "../../components/Modal/Modal";

const Home: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  useTitle("Home");

  const handleResume = () => {
    if (isMobile) {
      const link = document.createElement("a");
      link.href = "./data/resume-frontend-stepanov-vladimir.pdf";
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    } else {
      setModalOpen(!modalOpen);
    }
  };

  return (
    <motion.div
      className="home"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="home__text">
        <motion.p
          variants={textAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hello,
        </motion.p>
        <motion.p
          variants={textAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I’m Hartaithan.
        </motion.p>
        <motion.p
          variants={textAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0 }}
        >
          Frontend Developer
        </motion.p>
      </div>
      <div className="home__buttons">
        <motion.div
          className="home__buttons__wrapper"
          variants={buttonsAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link to={"/projects"}>
            <button className="home__buttons__button" id="projects">
              My Projects
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="home__buttons__wrapper"
          variants={buttonsAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 1 }}
        >
          <button
            className="home__buttons__button"
            id="resume"
            onClick={() => handleResume()}
          >
            {isMobile ? "Get Resume" : "Open Resume"}
          </button>
        </motion.div>
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
