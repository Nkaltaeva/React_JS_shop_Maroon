import React from "react";
import { Link } from "react-router-dom";
import Rectangle_6 from "../../../img/main/Rectangle_6.png";
import Rectangle_6_1 from "../../../img/main/Rectangle_6_1.png";
import Rectangle_6_2 from "../../../img/main/Rectangle_6_2.png";
import Rectangle_6_3 from "../../../img/main/Rectangle_6_3.png";
import Rectangle_6_4 from "../../../img/main/Rectangle_6_4.png";
import Rectangle_6_5 from "../../../img/main/Rectangle_6_5.png";

const Together = () => {
  return (
    <section className="content-together">
      <div className="content-together__img_collection">
        <img src={Rectangle_6} />
        <img src={Rectangle_6_1} />
        <img src={Rectangle_6_2} />
        <img src={Rectangle_6_3} />
        <img src={Rectangle_6_4} />
        <img src={Rectangle_6_5} />
      </div>
      <div className="content-blog_together__title">
        <h5 className="content-blog_heading">Присоединяйтесь к нам</h5>
        <p className="content-blog_sheet">
          Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях
          первыми
        </p>
        <Link to="/authorization">
          <button className="content-blog_btn">Подписаться</button>
        </Link>
      </div>
    </section>
  );
};

export default Together;
