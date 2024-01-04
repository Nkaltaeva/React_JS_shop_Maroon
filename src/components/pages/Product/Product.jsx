import React from "react";
import axios from "axios";

import indicator from "../../../img/icon/indicator.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const [cosmeticsCount, setCosmeticsCount] = React.useState(0);
  const [openDescription, setOpenDescription] = useState(false);
  const [openApplication, setOpenApplication] = useState(false);

  const onClickDescription = (event) => {
    setOpenDescription((current) => !current);
  };

  const onClickApplication = (event) => {
    setOpenApplication((current) => !current);
  };
  const onClickAdd = () => {
    setCosmeticsCount(cosmeticsCount + 1);
  };

  const { id } = useParams();
  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          "https://655f1f45879575426b4499ca.mockapi.io/Maroon/" + id
        );
        setProduct(data);
      } catch (error) {
        alert("Ошибка запроса, товар не найден");
      }
    }
    fetchProduct();
  }, []);

  if (!product) {
    return "Загрузка....";
  }

  return (
    <section className="catalog__product">
      <div className="catalog__product_card">
        <img className="catalog__product__imgUrl" src={product.imageUrl} />
        <div className="catalog__product_card_title">
          <div className="catalog__product_card_composition">
            <h3>{product.title}</h3>
            <p>{product.types}</p>
            <p className="catalog__product_card_description">
              Увлажняющий крем идеально подходит для повседневного ухода за
              молодой кожей. Крем равномерно распределяется по поверхности
              благодаря легкой текстуре, обеспечивает глубокое увлажнение,
              регенерацию клеток.
            </p>
          </div>
          <div className="rectangle_line"></div>
          <div className="catalog__product_card_composition">
            <div className="catalog__product_card_composition_title">
              <h5>Состав</h5>
              <Link
                onClick={onClickDescription}
                className="catalog__product_card_href"
              >
                <p className="catalog__product_card_description">
                  Открыть описание
                  <img src={indicator} />
                </p>

                {openDescription && (
                  <p>
                    Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol,
                    Glycerin, Tapioca Starch, Nelumbium Speciosum Flower
                    Extract, Calendula Officinalis Flower Extract, Propylene
                    Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol,
                    Citronellol, Limonene.
                  </p>
                )}
              </Link>
            </div>
          </div>
          <div className="rectangle_line"></div>
          <div className="catalog__product_card_composition">
            <div className="catalog__product_card_composition_title">
              <h5>Способ применения</h5>
              <Link
                onClick={onClickApplication}
                className="catalog__product_card_href"
              >
                <p className="catalog__product_card_description">
                  Открыть описание
                  <img src={indicator} />
                </p>

                {openApplication && (
                  <p>
                    Нанесите крем на очищенную кожу лица легкими массажными
                    круговыми движениями, избегая области вокруг глаз. Подходит
                    для дневного и ночного ухода.
                  </p>
                )}
              </Link>
            </div>
          </div>
          <div className="rectangle_line"></div>

          <div className="catalog__product_card_composition">
            <h5>Объем:</h5>
            <div className="radio_click__title">
              <label key="" className="radio_click">
                <input
                  className="radio_click_input"
                  type="radio"
                  name="myCheckbox"
                />
                {product.sizes} ml
              </label>
            </div>
          </div>

          <div className="rectangle_line"></div>

          <div className="catalog__product_card_composition catalog__product_card_composition_title">
            <h3>{product.price} ₽</h3>
            <button onClick={onClickAdd} className="content-blog_btn">
              <i>+</i>Добавить<i>{cosmeticsCount}</i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
