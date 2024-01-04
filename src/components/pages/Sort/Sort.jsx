import React from "react";

const Sort = ({ value, onChangeSort }) => {
  const [open, setOpen] = React.useState(false);

  const list = [
    { name: "популярности от min", sortProperty: "-rating" },
    { name: "популярности от max", sortProperty: "rating" },
    { name: "цене от min", sortProperty: "-price" },
    { name: "цене от max", sortProperty: "price" },
    { name: "алфавиту A-Z", sortProperty: "-title" },
    { name: "алфавиту Z-A", sortProperty: "title" },
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="content-blog_button">
        Фильтр по:<i>{value.name}</i>
      </button>
      {open ? (
        <ul className="sort_blog_product">
          {list.map((obj, i) => (
            <li
              key={i}
              onClick={() => onClickListItem(obj)}
              className={
                value.sortProperty === obj.sortProperty ? "active" : ""
              }
            >
              {obj.name}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sort;
