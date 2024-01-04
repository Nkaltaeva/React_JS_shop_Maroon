import React from "react";
import { Link } from "react-router-dom";

const HitBlog = () => {
  return (
    <section className="content-hit-blog">
      <div className="content-hit_title">
        <h3 className="content-blog_heading">Бестселлеры</h3>
        <p className="content-blog_sheet">
          Легендарные продукты, завоевавшие любовь наших клиентов
        </p>
        <Link to="/catalog">
          <button className="content-blog_btn">Смотреть все</button>
        </Link>
      </div>
      <div className="content-hit-blog_img2">
        <div className="content-img_heading">
          <div className="content-img_heading_title">
            <h5>High</h5>
            <p>крем для лица</p>
            <p className="content-title_click">
              <Link to="/catalog" className="content-img_heading_title_click">
                Перейти в каталог
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="content-hit-blog_img2_1">
        <div className="content-img_heading">
          <div className="content-img_heading_title">
            <h5>Rest</h5>
            <p>минеральная пудра</p>
            <p className="content-title_click">
              <Link to="/catalog" className="content-img_heading_title_click">
                Перейти в каталог
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="content-hit-blog_img2_2">
        <div className="content-img_heading">
          <div className="content-img_heading_title">
            <h5>Rose</h5>
            <p>крем для лица</p>
            <p className="content-title_click">
              <Link to="/catalog" className="content-img_heading_title_click">
                Перейти в каталог
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="content-hit-blog_img2_3">
        <div className="content-img_heading">
          <div className="content-img_heading_title">
            <h5>Milk</h5>
            <p>масло для тела</p>
            <p className="content-title_click">
              <Link to="/catalog" className="content-img_heading_title_click">
                Перейти в каталог
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HitBlog;
