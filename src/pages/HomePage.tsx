import React from "react";
import "../styles/homePage.scss";
import { motion } from "framer-motion";
import containerAnimation from "../animations";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
	React.useEffect(() => {
		document.title = "Home | Hartaithan.";
	});

	return (
		<motion.div className="home" variants={containerAnimation} initial="hidden" animate="visible" exit="exit">
			<div className="home_text">
				Hello,
				<br />
				I’m Hartaithan.
				<br />
				Frontend Developer
			</div>
			<div className="home_buttons">
				<Link to={"/works"}>
					<button className="home_buttons_button" id="works">
						My Works
					</button>
				</Link>
				<button className="home_buttons_button" id="resume">
					Get Resume
				</button>
			</div>
		</motion.div>
	);
};

export default HomePage;
