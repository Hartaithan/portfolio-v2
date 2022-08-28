import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import useTitle from "../../hooks/useTitle";
import IconSocials from "../../icons/Socials";
import data from "../../data/contacts.json";
import { IconSocialType } from "../../models/IconsModel";
import { IContactItem } from "../../models/ContactModel";

const Contact: React.FC = () => {
  const contacts = data as IContactItem[];
  useTitle("Contact");

  return (
    <motion.div
      className="contact"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {contacts.map((item) => (
        <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
          <div className="contact__icon" id={item.icon}>
            <IconSocials type={item.icon as IconSocialType} />
          </div>
        </a>
      ))}
    </motion.div>
  );
};

export default Contact;
