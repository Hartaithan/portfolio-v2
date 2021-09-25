import React from "react";
import "../styles/homePage.scss";
import { motion } from "framer-motion";
import { containerAnimation } from "../animations";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
	React.useEffect(() => {
		document.title = "Home | Hartaithan.";
	});

	const textAnimation = {
		initial: {
			x: 0,
			y: -400,
			opacity: 0,
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
		},
	};

	const buttonsAnimation = {
		initial: {
			x: 400,
			y: 0,
			opacity: 0,
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
		},
	};

	const MotionLink = motion(Link);

	return (
		<motion.div className="home" variants={containerAnimation} initial="hidden" animate="visible" exit="exit">
			<div className="home_text">
				<motion.p variants={textAnimation} initial="initial" animate="animate" transition={{ duration: 0.5, delay: 0.4 }}>
					Hello,
				</motion.p>
				<motion.p variants={textAnimation} initial="initial" animate="animate" transition={{ duration: 0.5, delay: 0.2 }}>
					I’m Hartaithan.
				</motion.p>
				<motion.p variants={textAnimation} initial="initial" animate="animate" transition={{ duration: 0.5, delay: 0 }}>
					Frontend Developer
				</motion.p>
			</div>
			<div className="home_buttons">
				<MotionLink to={"/works"} variants={buttonsAnimation} initial="initial" animate="animate" transition={{ duration: 0.5, delay: 0.8 }}>
					<motion.button className="home_buttons_button" id="works">
						My Works
					</motion.button>
				</MotionLink>
				<motion.a href="./data/resume.pdf" target="_blank" rel="noreferrer" variants={buttonsAnimation} initial="initial" animate="animate" transition={{ duration: 0.5, delay: 1 }}>
					<button className="home_buttons_button" id="resume">
						Get Resume
					</button>
				</motion.a>
			</div>
		</motion.div>
	);
};

export default HomePage;
