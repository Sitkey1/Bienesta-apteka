import { Link } from "react-router-dom";
import products from "../../data/products.json";
import { SearchBox } from "../../components/Search";
import "./style.scss";

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
          {categories.map((el) => {
            return (
              <li key={Math.random()}>
                <Link
                  to={el}
                  state={products.filter((item) => item.type === el)}
                >
                  <img src={require(`./images/${el}.png`)} alt="category" />
                  <span> {el}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
