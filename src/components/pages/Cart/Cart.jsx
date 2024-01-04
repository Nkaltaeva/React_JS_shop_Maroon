import React from "react";
import "./cart.css";
import cart from "../../../img/productCard/cart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="catalog__product">
      <div className="catalog__product_titles">
        <h3>Корзина</h3>
        <Link>
          <p> Удалить все товары из корзины</p>
        </Link>
      </div>
      <div className="cart_product">
        <h4 className="cart_product_title">Корзина пуста</h4>
        <Link to="/catalog">
          <img className="cart_product_img" src={cart} alt="корзина" />
        </Link>
      </div>
    </div>
  );
};

export default Cart;
