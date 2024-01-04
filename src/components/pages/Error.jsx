import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="content-list">
      <div className="content-sheet_blog_text">
        <h1 className="content-sheet_blog_logo">&#9888; ERROR 404</h1>
        <Link to="/">
          <button className="content-blog_btn">На главную</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
