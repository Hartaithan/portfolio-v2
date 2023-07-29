import { FC } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import useTitle from "../../hooks/useTitle";
import data from "../../data/contacts.json";
import { IContactItem } from "../../models/ContactModel";
import { socialIcons } from "../../constants/socials";

const Contact: FC = () => {
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
      {contacts.map((item) => {
        const Icon = socialIcons[item.icon];
        return (
          <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
            <div className="contact__icon" id={item.icon}>
              <Icon width={80} height={80} />
            </div>
          </a>
        );
      })}
    </motion.div>
  );
};

export default Contact;
