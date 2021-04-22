import React from "react";
import "../styles/navigation.scss";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
	const loc = useLocation();
	return (
		<div className="nav">
			<Link className={loc.pathname === "/" ? `nav_links nav_active` : "nav_links"} id="home" to={"/"}>
				Home
			</Link>
			<Link className={loc.pathname === "/works" ? `nav_links nav_active` : "nav_links"} id="works" to={"/works"}>
				Works
			</Link>
			<Link className={loc.pathname === "/about" ? `nav_links nav_active` : "nav_links"} id="about" to={"/about"}>
				About Me
			</Link>
			<Link className={loc.pathname === "/contact" ? `nav_links nav_active` : "nav_links"} id="contact" to={"/contact"}>
				Contact
			</Link>
		</div>
	);
};

export default Navigation;
