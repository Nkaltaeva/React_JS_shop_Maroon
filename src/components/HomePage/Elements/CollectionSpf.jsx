import React from "react";
import { Link } from "react-router-dom";

const CollectionSpf = () => {
  return (
    <section className="content-collection-fon-spf">
      <div className="content-collection-title">
        <h3 className="content-blog_heading">Встречайте весну вместе с нами</h3>
        <p className="content-blog_sheet">
          Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой
        </p>
        <Link to="/catalog">
          <button className="content-blog_btn">Подробнее</button>
        </Link>
      </div>
    </section>
  );
};

export default CollectionSpf;
