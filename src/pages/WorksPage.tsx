import React from "react";
import "../styles/worksPage.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../animations";
import Carousel from "../components/Carousel";

const WorksPage: React.FC = () => {
	React.useEffect(() => {
		document.title = "Works | Hartaithan.";
	});

	return (
		<motion.div className="works" variants={containerAnimation} initial="hidden" animate="visible" exit="exit">
			<Carousel />
		</motion.div>
	);
};

export default WorksPage;
