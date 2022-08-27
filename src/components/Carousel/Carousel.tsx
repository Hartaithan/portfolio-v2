import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderAnimation } from "../../animations";
import items from "../../data/works.json";
import IconSocials from "../../icons/Socials";
import IconArrow from "../../icons/Arrow";
import { IconSocialType } from "../../models/IconsModel";

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
          className="works__main"
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
            className="works__main__container"
            style={{ alignSelf: pos === false ? "flex-start" : "flex-end" }}
          >
            <div
              className="works__main__container__title"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {`${items[page].id}. ${items[page].name}`}
            </div>
            <div
              className="works__main__container__category"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {items[page].categ}
            </div>
            <div
              className="works__main__container__descr"
              style={{ textAlign: pos === false ? "start" : "end" }}
            >
              {items[page].descr}
            </div>
            <div className="works__main__container__tags">
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
              className="works__main__container__links"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {items[page].links.map((link) => {
                return (
                  <a
                    href={link.src}
                    key={link.icon}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconSocials type={link.icon as IconSocialType} />
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
              src={items[page].img}
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
        {items.map((item, index) => {
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
    </>
  );
};

export default Carousel;
