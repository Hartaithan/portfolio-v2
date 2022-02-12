import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import useTitle from "../../hooks/useTitle";
import {
  IconEmail,
  IconGithub,
  IconInstagram,
  IconPlaymarket,
} from "../../icons";

const Contact: React.FC = () => {
  useTitle("Contact");

  return (
    <motion.div
      className="contact"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <a href="mailto:hartaithan@gmail.com" target="_blank" rel="noreferrer">
        <div className="contact__icon" id="email">
          <IconEmail />
        </div>
      </a>
      <a href="//github.com/Hartaithan" target="_blank" rel="noreferrer">
        <div className="contact__icon" id="github">
          <IconGithub />
        </div>
      </a>
      <a href="//www.instagram.com/hartaithan" target="_blank" rel="noreferrer">
        <div className="contact__icon" id="instagram">
          <IconInstagram />
        </div>
      </a>
      <a
        href="//play.google.com/store/apps/dev?id=4716065440707220964"
        target="_blank"
        rel="noreferrer"
      >
        <div className="contact__icon" id="playmarket">
          <IconPlaymarket />
        </div>
      </a>
    </motion.div>
  );
};

export default Contact;
