export const containerAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { duration: 0.8 },
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.8 },
	},
};

export const sliderAnimation = {
	sliderEnter: (dir: number) => {
		console.log("enter");
		return {
			x: dir > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	sliderCenter: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	sliderExit: (dir: number) => {
		console.log("exit");
		return {
			zIndex: 0,
			x: dir < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};
