import React from "react";
import { Link } from "react-router-dom";
import Rectangle_1_3 from "../../img/main/Rectangle_1_3.png";

const Registration = () => {
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
          <h5 className="content-authorization_title">РЕГИСТРАЦИЯ</h5>

          <form className="content-authorization-list_email">
            <input
              type="email"
              id="email"
              pattern=".+@example\.com"
              size="30"
              required
              placeholder="email:"
            />
          </form>

          <form className="content-authorization-list_password">
            <input
              type="password"
              id="pass"
              name="password"
              minlength="8"
              required
              placeholder="пароль:"
            />
          </form>

          <form className="content-authorization-list_password">
            <input
              type="password"
              id="double_pass"
              name="password"
              minlength="8"
              required
              placeholder="повторите пароль:"
            />
          </form>

          <form className="content-authorization-checkbox_click">
            <input type="checkbox" />
            <label className="content-authorization-checkbox">
              Я согласен на обработку персональных данных
            </label>
          </form>

          <div className="content-authorization-list_button">
            <button className="content-authorization-list_input" type="submit">
              <Link to="#">Зарегестрироваться</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
