import React from "react";
import "./catalog.css";

const Catalog = ({ title, types, price, imageUrl }) => {
  const [cosmeticsCount, setCosmeticsCount] = React.useState(0);

  const onClickAdd = () => {
    setCosmeticsCount(cosmeticsCount + 1);
  };

  return (
    <>
      <li className="catalog__product_cell_img">
        <img src={imageUrl} alt="Товар" />
        <ul className="catalog__product_cell_title">
          <li>
            <h5>{title}</h5>
          </li>
          <li>
            <h5>от {price} ₽</h5>
          </li>
        </ul>
        <ul className="catalog__product_cell_title_description">
          <li>
            <p>{types}</p>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Catalog;
