import React from "react";
import { motion } from "framer-motion";
import { IBackdropProps } from "../../models/BackdropModel";
import "./backdrop.scss";

const Backdrop: React.FC<IBackdropProps> = (props) => {
  const { children, onClick } = props;
  return (
    <motion.div
      className="backdrop"
      onClick={() => onClick()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
