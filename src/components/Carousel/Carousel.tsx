import { FC, Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderAnimation } from "../../animations";
import data from "../../data/works.json";
import { IWorkItem } from "../../models/WorksModel";
import IconArrow from "../../icons/Arrow";
import { socialIcons } from "../../constants/socials";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel: FC = (): JSX.Element => {
  const works = data as IWorkItem[];
  const [[page, dir], setPage] = useState([0, 0]);
  const [pos, setPos] = useState(true);

  const changePage = (newDir: number) => {
    const numOfPages = works.length - 1;
    switch (newDir) {
      case -1:
        if (page > 0) {
          setPage([page + newDir, newDir]);
          setPos(!pos);
        } else {
          setPage([numOfPages, newDir]);
          setPos(!pos);
        }
        break;
      case +1:
        if (page < numOfPages) {
          setPage([page + newDir, newDir]);
          setPos(!pos);
        } else {
          setPage([0, newDir]);
          setPos(!pos);
        }
        break;
      default:
        setPage([0, newDir]);
        setPos(!pos);
        break;
    }
  };

  const changePageBullet = (index: number) => {
    if (index !== page) {
      if (index < page) {
        setPage([index, -1]);
        setPos(!pos);
      } else {
        setPage([index, +1]);
        setPos(!pos);
      }
    }
  };

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter initial={false} custom={dir}>
        <motion.div
          className="works__main"
          key={works[page].name}
          custom={dir}
          variants={sliderAnimation}
          initial="sliderEnter"
          animate="sliderCenter"
          exit="sliderExit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              changePage(+1);
            } else if (swipe > swipeConfidenceThreshold) {
              changePage(-1);
            }
          }}
        >
          <div
            className="works__main__container"
            style={{ alignSelf: pos === false ? "flex-start" : "flex-end" }}
          >
            <div
              className="works__main__container__title"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {`${works[page].id}. ${works[page].name}`}
            </div>
            <div
              className="works__main__container__category"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {works[page].categ}
            </div>
            <div
              className="works__main__container__descr"
              style={{ textAlign: pos === false ? "start" : "end" }}
            >
              {works[page].descr}
            </div>
            <div className="works__main__container__tags">
              <ul
                style={{
                  justifyContent: pos === false ? "flex-start" : "flex-end",
                }}
              >
                {works[page].tags.map((tag) => {
                  return <li key={tag}>{tag}</li>;
                })}
              </ul>
            </div>
            <div
              className="works__main__container__links"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {works[page].links.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    href={link.src}
                    key={link.icon}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon width={20} height={20} />
                  </a>
                );
              })}
            </div>
          </div>
          <div
            className="works__main__img"
            style={{ alignSelf: pos === false ? "flex-end" : "flex-start" }}
          >
            <img
              src={works[page].img}
              draggable="false"
              alt="works main img"
            ></img>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="works__arrows">
        <IconArrow
          direction="left"
          className="works__arrows__left"
          onClick={() => changePage(-1)}
        />
        <IconArrow
          direction="right"
          className="works__arrows__right"
          onClick={() => changePage(+1)}
        />
      </div>
      <div className="works__pages">
        {works.map((item, index) => {
          return (
            <div
              className="works__pages__item"
              id={`page${index}`}
              key={item.name}
              style={{ background: page === index ? "white" : "#1b1b1b" }}
              onClick={() => changePageBullet(index)}
            ></div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Carousel;
