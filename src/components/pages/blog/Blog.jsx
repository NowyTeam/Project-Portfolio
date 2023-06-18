import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import scss from "./Blog.module.scss";

const Blog = () => {
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <div className={scss.page_wrapper}>
      <Helmet>
        <title>Nowy - Blog</title>
      </Helmet>
      <div className={scss.container}>
        <div className={`${scss.home_content} ${headerScroll ? scss.active : ""}`}>
          <div className={scss.blog_title}>
            <div className={`${scss.title} ${headerScroll ? scss.active : ""}`}>
              <h3>Zhusup Toktosunov | Personal Blog</h3>
              <p>
                Welcome to my personal blog. Here I share my stories and ideas
                with the world. I am very passionate about programming and
                design. Currently, I am a Computer Science student at WEDEVX
              </p>
            </div>

            <Link to="/contacts">
              <button className={scss.btn}>
                Get In Touch <span>→</span>
              </button>
            </Link>
          </div>

          <div className={scss.blog_img}>
            <img
              src="https://s.abcnews.com/images/Business/elon-musk-file-gty-jef-220711_1657563938913_hpMain_4x3_992.jpg"
              alt="Logo"
            />
          </div>
          <div className={scss.blog_title}>
            <div
              className={`${scss.title} ${
                headerScroll ? scss.active : ""
              }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
