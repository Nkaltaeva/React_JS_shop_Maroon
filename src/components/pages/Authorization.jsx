import React from "react";
import { Link } from "react-router-dom";
import "../../css/registration.css";
import Rectangle_1_3 from "../../img/main/Rectangle_1_3.png";

const Authorization = () => {
  return (
    <div className="content-authorization">
      <div className="content-authorization-banner">
        <p className="content-blog-sheet_banner_title">
          Натуральная косметика <br />
          для бережного ухода за кожей
        </p>
        <img
          className="content-blog-sheet_banner_img"
          src={Rectangle_1_3}
          alt="баннер"
        />
      </div>

      <div className="content-authorization-list">
        <div className="content-authorization-list_title">
          <h5 className="content-authorization_title">АВТОРИЗАЦИЯ</h5>

          <div className="content-authorization-list_email">
            <input
              type="email"
              id="email"
              pattern=".+@example\.com"
              size="30"
              required
              placeholder="email:"
            />
          </div>

          <div className="content-authorization-list_password">
            <input
              type="password"
              id="pass"
              name="password"
              minlength="8"
              required
              placeholder="пароль:"
            />
          </div>

          <div className="content-authorization-list_button">
            <button className="content-authorization-list_input" type="submit">
              <Link to="#!">Войти</Link>
            </button>
            <br />
            <button
              className="content-authorization-list_registration"
              type="submit"
            >
              <Link to="/registration">РЕГИСТРАЦИЯ</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
