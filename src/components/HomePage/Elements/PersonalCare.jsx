import React from "react";
import { Link } from "react-router-dom";
import Rectangle_4 from "../../../img/main/Rectangle_4.png";

const PersonalCare = () => {
  return (
    <section className="content-personal_care">
      <div className="content-personal_care_title">
        <div className="content-personal_title">
          <h5 className="content-blog_heading">Индивидуальный уход</h5>
          <p className="content-blog_sheet">
            Не всегда очевидно, какие элементы и минералы необходимы коже, а
            многочисленные эксперименты с разными средствами только ухудшают ее
            качество. Заполните анкету, и мы подберем уход, подходящий именно
            вам, учитывая ваш образ жизни, место жительства и другие факторы.
          </p>
          <Link to="/authorization">
            <button className="content-blog_btn">Заполнить анкету</button>
          </Link>
        </div>
      </div>
      <img className="content-personal_care_img" src={Rectangle_4} />
    </section>
  );
};

export default PersonalCare;
