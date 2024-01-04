import React from "react";
import Catalog from "./Catalog";
import CatalogSkeleton from "./CatalogSkeleton";
import Together from "../../HomePage/Elements/Together";
import Contacts from "../../HomePage/Elements/Contacts";
import Sort from "../Sort/Sort";
import { Link } from "react-router-dom";

const CatalogProduct = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState({
    name: "алфавиту A-Z",
    sortProperty: "-title",
  });

  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sortProperty.replace("-", "");

  React.useEffect(() => {
    fetch(
      `https://655f1f45879575426b4499ca.mockapi.io/Maroon?
      &sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [sortType]);

  return (
    <div className="catalog__product">
      <div className="catalog__product_titles">
        <h3>Каталог</h3>
        <div>
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
        </div>
      </div>
      <div className="catalog__product_list">
        <ul className="catalog_product_list_cell">
          {isLoading
            ? [...new Array(12)].map((_, index) => (
                <CatalogSkeleton key={index} />
              ))
            : items.map((obj) => (
                <Link key={obj.id} to={`/catalog/${obj.id}`}>
                  <Catalog {...obj} />
                </Link>
              ))}
        </ul>
      </div>
      <Together />
      <Contacts />
    </div>
  );
};

export default CatalogProduct;
