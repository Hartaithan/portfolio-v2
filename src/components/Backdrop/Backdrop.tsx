import React from "react";
import { motion } from "framer-motion";
import "./backdrop.scss";

export interface IBackdropProps {
  children: React.ReactNode;
  onClick: () => void;
}

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
