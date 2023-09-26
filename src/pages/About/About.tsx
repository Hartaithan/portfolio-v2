import { FC } from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import data from "../../data/about.json";
import useTitle from "../../hooks/useTitle";
import { IAboutItem } from "../../models/AboutModel";

const About: FC = () => {
  const about = data as IAboutItem[];
  useTitle("About");

  return (
    <motion.div
      className="about"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {about.map((item) => {
        if (item.tags.length === 0) {
          return (
            <div className="about__element" id={item.id} key={item.id}>
              <div className="about__element__title">
                <span>{item.title}</span>
              </div>
              <div className="about__element__content">
                <p>{item.content}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="about__element withTags" id={item.id} key={item.id}>
              <div className="about__element__title">{item.title}</div>
              <div className="about__element__content">
                <ul>
                  {item.tags.map((tag) => {
                    return <li key={tag}>{tag}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        }
      })}
    </motion.div>
  );
};

export default About;
