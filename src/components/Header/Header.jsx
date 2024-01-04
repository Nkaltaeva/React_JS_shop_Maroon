import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <Link className="header-logo" to="/">
          <h3>MAROON</h3>
        </Link>

        <nav className="header-nav">
          <ul className="header-nav__list">
            <li className="header-nav-item">
              <Link className="text-menu" to="/catalog">
                Каталог
              </Link>
            </li>
            <li className="header-nav-item">
              <Link className="text-menu" to="/company">
                О нас
              </Link>
            </li>
            <li className="header-nav-item">
              <Link className="text-menu" to="/contacts">
                Контакты
              </Link>
            </li>
            <li className="header-nav-item">
              <Link className="text-menu" to="/authorization">
                <svg
                  className="svg_icon "
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="green"
                  to="#"
                >
                  <path
                    d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z"
                    fill="#122947"
                  />
                </svg>
              </Link>
            </li>
            <li className="header-nav-item">
              <Link className="text-menu" to="/сart">
                <svg
                  className="svg_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="green"
                  to="#"
                >
                  <path
                    d="M4 7V5C4 3.67392 4.52678 2.40215 5.46447 1.46447C6.40215 0.526784 7.67392 0 9 0C10.3261 0 11.5979 0.526784 12.5355 1.46447C13.4732 2.40215 14 3.67392 14 5V7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H1C0.734784 21 0.48043 20.8946 0.292893 20.7071C0.105357 20.5196 0 20.2652 0 20V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H4ZM4 9H2V19H16V9H14V11H12V9H6V11H4V9ZM6 7H12V5C12 4.20435 11.6839 3.44129 11.1213 2.87868C10.5587 2.31607 9.79565 2 9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5V7Z"
                    fill="#122947"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
