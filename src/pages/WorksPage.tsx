import React from "react";
import "../styles/worksPage.scss";
import { motion } from "framer-motion";
import containerAnimation from "../animations";

const WorksPage: React.FC = () => {
	React.useEffect(() => {
		document.title = "Works | Hartaithan.";
	});

	interface WorkProps {
		pos: string;
	}

	const Work: React.FC<WorkProps> = (props): JSX.Element => {
		return (
			<div className="works_main">
				<div className="works_main_container" style={{ alignSelf: props.pos === "left" ? "flex-start" : "flex-end" }}>
					<div className="works_main_container_title" style={{ justifyContent: props.pos === "left" ? "flex-start" : "flex-end" }}>1. A-Z</div>
					<div className="works_main_container_category" style={{ justifyContent: props.pos === "left" ? "flex-start" : "flex-end" }}>Mobile Game</div>
					<div className="works_main_container_descr" style={{ textAlign: props.pos === "left" ? "start" : "end" }}>The first serious project. A small text puzzle game based on the alphabet. Written on Kotlin. The Volley library was used to make HTTP requests to the web leaderboard.</div>
					<div className="works_main_container_tags">
						<ul style={{ justifyContent: props.pos === "left" ? "flex-start" : "flex-end" }}>
							<li>ANDROID</li>
							<li>KOTLIN</li>
							<li>VOLLEY</li>
						</ul>
					</div>
					<div className="works_main_container_links" style={{ justifyContent: props.pos === "left" ? "flex-start" : "flex-end" }}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56L1 22.115V2.093l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zM1.46.433c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011L15.948 7.21l-3.846 3.835L1.46.433z" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
						</svg>
					</div>
				</div>
				<div className="works_main_img" style={{ alignSelf: props.pos === "left" ? "flex-end" : "flex-start" }}>
					<img src="./img/works/a-z.png" alt="works_main_img"></img>
				</div>
			</div>
		);
	};

	return (
		<motion.div className="works" variants={containerAnimation} initial="hidden" animate="visible" exit="exit">
			<Work pos="right" />
			<div className="works_arrows">
				<svg className="works_arrows_left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				</svg>
				<svg className="works_arrows_right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
				</svg>
			</div>
		</motion.div>
	);
};

export default WorksPage;
