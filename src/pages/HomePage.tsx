import React from "react";
import "../styles/homePage.scss";
import { motion } from "framer-motion";
import { buttonsAnimation, textAnimation, containerAnimation } from "../animations";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
	React.useEffect(() => {
		document.title = "Home | Hartaithan.";
	});

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
				<motion.div className="home_buttons_wrapper" variants={buttonsAnimation} initial="initial" animate="animate" transition={{ duration: 0.5, delay: 0.8 }}>
					<Link to={"/works"}>
						<button className="home_buttons_button" id="works">
							My Works
						</button>
					</Link>
				</motion.div>
				<motion.div className="home_buttons_wrapper" variants={buttonsAnimation} initial="initial" animate="animate" transition={{ duration: 0.5, delay: 1 }}>
					<a href="./data/resume.pdf" target="_blank" rel="noreferrer">
						<button className="home_buttons_button" id="resume">
							Get Resume
						</button>
					</a>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default HomePage;
