import React from "react";
import "../styles/worksPage.scss";
import { motion } from "framer-motion";
import containerAnimation from "../animations";
import items from "../data/works.json";
import DynamicIcon from "../svg";

const WorksPage: React.FC = () => {
	React.useEffect(() => {
		document.title = "Works | Hartaithan.";
	});

	interface ILinks {
		svg: string;
		src: string;
	}

	interface IItems {
		name: string;
		categ: string;
		descr: string;
		img: string;
		tags: string[];
		links: ILinks[];
	}

	interface IWorkProps {
		pos: string;
		items: IItems;
	}

	const Work: React.FC<IWorkProps> = ({ pos, items }): JSX.Element => {
		return (
			<div className="works_main">
				<div className="works_main_container" style={{ alignSelf: pos === "left" ? "flex-start" : "flex-end" }}>
					<div className="works_main_container_title" style={{ justifyContent: pos === "left" ? "flex-start" : "flex-end" }}>
						1. {items.name}
					</div>
					<div className="works_main_container_category" style={{ justifyContent: pos === "left" ? "flex-start" : "flex-end" }}>
						{items.categ}
					</div>
					<div className="works_main_container_descr" style={{ textAlign: pos === "left" ? "start" : "end" }}>
						{items.descr}
					</div>
					<div className="works_main_container_tags">
						<ul style={{ justifyContent: pos === "left" ? "flex-start" : "flex-end" }}>
							{items.tags.map((tag) => {
								return <li key={tag}>{tag}</li>;
							})}
						</ul>
					</div>
					<div className="works_main_container_links" style={{ justifyContent: pos === "left" ? "flex-start" : "flex-end" }}>
						{items.links.map((link) => {
							return (
								<a href={link.src} target="_blank" rel="noreferrer">
									<DynamicIcon svg={link.svg} />
								</a>
							);
						})}
					</div>
				</div>
				<div className="works_main_img" style={{ alignSelf: pos === "left" ? "flex-end" : "flex-start" }}>
					<img src="./img/works/a-z.png" alt="works_main_img"></img>
				</div>
			</div>
		);
	};

	return (
		<motion.div className="works" variants={containerAnimation} initial="hidden" animate="visible" exit="exit">
			<Work pos="right" items={items[0]} />
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
