import { Link } from "react-router-dom";
import products from "../../data/products.json";
import { SearchBox } from "../../components/Search";
import "./style.scss";
import { useState } from "react";

const categories = [
  "salud",
  "hipertension",
  "adelgazar",
  "saludmasculina",
  "diabetes",
  "belleza",
  "articulacion",
  "abandonar los malos habitos",
  "rumor",
  "vision",
  "nuevo",
];

export const CategoriesPages = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <SearchBox />
        <ul className="list-reset ">
          {categories.map((el, i) => {
            return (
              // TODO: Почему то не работает если обернуть Link в li
              <Link
                key={el.id}
                to={el}
                state={products.filter((item) => item.type === el)}
              >
                <img src={require(`./images/${el}.png`)} alt="category" />
                {el}
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
