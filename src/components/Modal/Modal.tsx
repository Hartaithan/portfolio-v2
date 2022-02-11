import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import { IModalProps } from "../../models/ModalModel";
import { modalAnimation } from "../../animations";
import "./modal.scss";

const Modal: React.FC<IModalProps> = (props) => {
  const { setModalOpen } = props;

  function downloadResume() {
    const link = document.createElement("a");
    link.href = "./data/resume.pdf";
    link.setAttribute("download", `resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  }

  return (
    <Backdrop onClick={() => setModalOpen(false)}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal__download" onClick={() => downloadResume()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z" />
            <path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z" />
          </svg>
        </div>
        <iframe
          className="modal__resume"
          title="resume"
          src={`./data/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&scrolling=0&view=fitH`}
          frameBorder="0"
          scrolling="no"
        />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
