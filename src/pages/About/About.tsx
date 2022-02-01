import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import items from "../../data/about.json";
import useTitle from "../../hooks/useTitle";

const About: React.FC = () => {
  useTitle("About");

  return (
    <motion.div
      className="about"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {items.map((item) => {
        if (!item.containsTags) {
          return (
            <div className="about_element" id={item.id} key={item.id}>
              <div className="about_element_title">
                <span>{item.title}</span>
              </div>
              <div className="about_element_content">{item.content}</div>
            </div>
          );
        } else {
          return (
            <div className="about_element withTags" id={item.id} key={item.id}>
              <div className="about_element_title">{item.title}</div>
              <div className="about_element_content">
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
