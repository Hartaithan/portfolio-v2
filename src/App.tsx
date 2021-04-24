import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import ThreeJS from "./components/ThreeJS";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";

function findVH() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
}

findVH();

window.addEventListener("resize", () => {
	findVH();
});

const App: React.FC = () => {
	const location = useLocation();

	return (
		<>
			<Navigation />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route component={HomePage} path="/" exact />
					<Route component={AboutPage} path="/about" />
					<Route component={WorksPage} path="/works" />
					<Route component={ContactPage} path="/contact" />
				</Switch>
			</AnimatePresence>
			<ThreeJS />
		</>
	);
};

export default App;
