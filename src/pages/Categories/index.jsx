import { useNavigate } from "react-router-dom";
import products from "../../data/products.json";

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
      {categories.map((el) => (
        <button
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
    </main>
  );
};
