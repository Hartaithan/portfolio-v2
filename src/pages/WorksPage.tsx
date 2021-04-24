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

	const [page, setPage] = React.useState(0);
	const [pos, setPos] = React.useState(true);

	React.useEffect(() => {
		const allPagesItems = Array.from(document.getElementsByClassName("works_pages_item"));
		allPagesItems.forEach((element) => {
			const el = element as HTMLElement;
			el.style.background = "#1b1b1b";
		});
		const pageItem = document.querySelector(`#page${page}`) as HTMLElement;
		pageItem.style.background = "white";
	}, [page]);

	function minusPage() {
		const numOfPages = items.length - 1;
		if (page > 0) {
			setPage(page - 1);
			setPos(!pos);
		} else {
			setPage(numOfPages);
			setPos(!pos);
		}
	}

	function plusPage() {
		const numOfPages = items.length - 1;
		if (page < numOfPages) {
			setPage(page + 1);
			setPos(!pos);
		} else {
			setPage(0);
			setPos(!pos);
		}
	}

	interface ILinks {
		svg: string;
		src: string;
	}

	interface IItems {
		id: number;
		name: string;
		categ: string;
		descr: string;
		img: string;
		tags: string[];
		links: ILinks[];
	}

	interface IWorkProps {
		items: IItems;
	}

	const Work: React.FC<IWorkProps> = ({ items }): JSX.Element => {
		return (
			<div className="works_main">
				<div className="works_main_container" style={{ alignSelf: pos === false ? "flex-start" : "flex-end" }}>
					<div className="works_main_container_title" style={{ justifyContent: pos === false ? "flex-start" : "flex-end" }}>
						{items.id}. {items.name}
					</div>
					<div className="works_main_container_category" style={{ justifyContent: pos === false ? "flex-start" : "flex-end" }}>
						{items.categ}
					</div>
					<div className="works_main_container_descr" style={{ textAlign: pos === false ? "start" : "end" }}>
						{items.descr}
					</div>
					<div className="works_main_container_tags">
						<ul style={{ justifyContent: pos === false ? "flex-start" : "flex-end" }}>
							{items.tags.map((tag) => {
								return <li key={tag}>{tag}</li>;
							})}
						</ul>
					</div>
					<div className="works_main_container_links" style={{ justifyContent: pos === false ? "flex-start" : "flex-end" }}>
						{items.links.map((link) => {
							return (
								<a href={link.src} key={link.svg} target="_blank" rel="noreferrer">
									<DynamicIcon svg={link.svg} />
								</a>
							);
						})}
					</div>
				</div>
				<div className="works_main_img" style={{ alignSelf: pos === false ? "flex-end" : "flex-start" }}>
					<img src={items.img} alt="works_main_img"></img>
				</div>
			</div>
		);
	};

	return (
		<motion.div className="works" variants={containerAnimation} initial="hidden" animate="visible" exit="exit">
			<Work items={items[page]} />
			<div className="works_arrows">
				<svg className="works_arrows_left" onClick={() => minusPage()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				</svg>
				<svg className="works_arrows_right" onClick={() => plusPage()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
				</svg>
			</div>
			<div className="works_pages">
				{items.map((item, index) => {
					return <div className="works_pages_item" id={`page${index}`} key={item.name} onClick={() => setPage(index)}></div>;
				})}
			</div>
		</motion.div>
	);
};

export default WorksPage;
