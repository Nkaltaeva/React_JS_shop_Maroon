import React from "react";
import { Link } from "react-router-dom";
import Rectangle1 from "../../../img/main/Rectangle1.png";
import Rectangle_1_3 from "../../../img/main/Rectangle_1_3.png";

const MainSheet = () => {
  return (
    <div className="content-list">
      <div className="content-sheet_blog">
        <div className="main_sheet_blog_img">
          <Link className="content-blog_img" to="/catalog">
            <img src={Rectangle1} />
            <div className="content-blog_text ">
              <p className="content-sheet_blog_label">Перейти в каталог...</p>
              <svg
                className="content-svg_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="14"
                viewBox="0 0 27 14"
                fill="green"
                to="#"
              >
                <path
                  d="M0 7H26M26 7L19.697 1M26 7L19.697 13"
                  stroke="#122947"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="content-sheet_blog_text">
        <h1 className="content-sheet_blog_logo">MAROON</h1>
        <p className="content-blog-sheet">
          Натуральная косметика для бережного ухода за кожей
        </p>
        <Link to="/company">
          <button className="content-blog_btn">Подробнее</button>
        </Link>
      </div>
      <div className="content-sheet_blog">
        <div className="main_sheet_blog_img">
          <a className="content-blog_img" to="/catalog">
            <img src={Rectangle_1_3} />
            <div className="content-blog_text">
              <p className="content-sheet_blog_label">Перейти в каталог...</p>
              <svg
                className="content-svg_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="14"
                viewBox="0 0 27 14"
                fill="green"
                to="#"
              >
                <path
                  d="M0 7H26M26 7L19.697 1M26 7L19.697 13"
                  stroke="#122947"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainSheet;
