import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import useTitle from "../../hooks/useTitle";
import IconSocials from "../../icons/Socials";

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
          <IconSocials type="email" />
        </div>
      </a>
      <a href="//github.com/Hartaithan" target="_blank" rel="noreferrer">
        <div className="contact__icon" id="github">
          <IconSocials type="github" />
        </div>
      </a>
      <a href="//www.instagram.com/hartaithan" target="_blank" rel="noreferrer">
        <div className="contact__icon" id="instagram">
          <IconSocials type="instagram" />
        </div>
      </a>
      <a
        href="//play.google.com/store/apps/dev?id=4716065440707220964"
        target="_blank"
        rel="noreferrer"
      >
        <div className="contact__icon" id="playmarket">
          <IconSocials type="playmarket" />
        </div>
      </a>
    </motion.div>
  );
};

export default Contact;
