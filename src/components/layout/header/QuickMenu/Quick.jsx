import React, { useEffect, useState } from "react";
import scss from "./Quick.module.scss";
import { NavLink } from "react-router-dom";
import { animate, motion, AnimatePresence } from "framer-motion";

const Quick = () => {
  const [headerScroll2, setHeaderScroll2] = useState(false);

  const Menu = {
    initial: {
      scale: 0.9,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.1 },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.1 },
    },
  };

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll2(true);
      } else {
        setHeaderScroll2(false);
      }
    };

    const setZoom = () => {
      document.body.style.zoom = "90%";
    };

    setZoom();

    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <motion.div
      key="dropdown"
      variants={Menu}
      initial="initial"
      animate="animate"
      exit="exit"
      className={scss.wrapper_adpt}>
      <div
        className={
          headerScroll2
            ? `${scss.wrapper_adpt_hlp} ${scss.active}`
            : `${scss.wrapper_adpt_hlp}`
        }>
        <div className={scss.wrapper}>
          <div className={scss.wrapper_box}>
            <NavLink
              to="https://cloud.mail.ru/public/MaXo/vZTgfh65W"
              className={`${scss.link}`}>
              Job Resume
            </NavLink>
            <hr />
            <NavLink
              to="https://cloud.mail.ru/public/2Cvu/4RkyuGRgJ"
              className={`${scss.link}`}>
              Student Resume
            </NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Quick;
