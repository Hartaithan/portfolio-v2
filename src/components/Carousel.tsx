import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderAnimation } from "../animations";
import items from "../data/works.json";
import DynamicIcon from "../svg";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel: React.FC = (): JSX.Element => {
  const [[page, dir], setPage] = React.useState([0, 0]);
  const [pos, setPos] = React.useState(true);

  function changePage(newDir: number) {
    const numOfPages = items.length - 1;
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
  }

  function changePageBullet(index: number) {
    if (index !== page) {
      if (index < page) {
        setPage([index, -1]);
        setPos(!pos);
      } else {
        setPage([index, +1]);
        setPos(!pos);
      }
    }
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false} custom={dir}>
        <motion.div
          className="works_main"
          key={items[page].name}
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
            className="works_main_container"
            style={{ alignSelf: pos === false ? "flex-start" : "flex-end" }}
          >
            <div
              className="works_main_container_title"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {`${items[page].id}. ${items[page].name}`}
            </div>
            <div
              className="works_main_container_category"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {items[page].categ}
            </div>
            <div
              className="works_main_container_descr"
              style={{ textAlign: pos === false ? "start" : "end" }}
            >
              {items[page].descr}
            </div>
            <div className="works_main_container_tags">
              <ul
                style={{
                  justifyContent: pos === false ? "flex-start" : "flex-end",
                }}
              >
                {items[page].tags.map((tag) => {
                  return <li key={tag}>{tag}</li>;
                })}
              </ul>
            </div>
            <div
              className="works_main_container_links"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {items[page].links.map((link) => {
                return (
                  <a
                    href={link.src}
                    key={link.svg}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <DynamicIcon svg={link.svg} />
                  </a>
                );
              })}
            </div>
          </div>
          <div
            className="works_main_img"
            style={{ alignSelf: pos === false ? "flex-end" : "flex-start" }}
          >
            <img
              src={items[page].img}
              draggable="false"
              alt="works_main_img"
            ></img>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="works_arrows">
        <svg
          className="works_arrows_left"
          onClick={() => changePage(-1)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
        <svg
          className="works_arrows_right"
          onClick={() => changePage(+1)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </div>
      <div className="works_pages">
        {items.map((item, index) => {
          return (
            <div
              className="works_pages_item"
              id={`page${index}`}
              key={item.name}
              style={{ background: page === index ? "white" : "#1b1b1b" }}
              onClick={() => changePageBullet(index)}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
