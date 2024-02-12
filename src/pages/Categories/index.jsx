import { useNavigate } from "react-router-dom";
import products from "../../data/products.json";
import { Header } from "../../components/Header";
import "./style.scss";

const categories = [
  "salud",
  "hipertension",
  "adelgazar",
  "diabetes",
  "belleza",
  "articulacion",
  "abandonar losmalos habitos",
  "rumor",
  "vision",
  "nuevo",
];

export const CategoriesPages = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="container">
        {categories.map((el) => (
          <button
            className="btn-reset"
            key={el}
            onClick={() =>
              navigate(el, {
                state: {
                  data: products.filter((item) => item.type === el),
                },
              })
            }
          >
            {el}
          </button>
        ))}
      </div>

      <Header />
    </main>
  );
};
