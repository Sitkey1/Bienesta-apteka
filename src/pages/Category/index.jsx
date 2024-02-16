import { useLocation, useNavigate } from "react-router-dom";
import "./";
import { SearchBox } from "../../components/Search";
import "./style.scss";

export const CategoryPage = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <section className="category-section">
      <div className="container">
        <SearchBox />
        <ul className="list-reset">
          {state.map((el) => {
            return (
              <li key={Math.random()}>
                <div className="img-box">
                  <img src={`/image/${el.img}`} alt="product" />
                </div>
                <div className="wrapper-box">
                  <h4>{el.title}</h4>
                  <span>{el.subDescr}</span>
                  <span className="oldprice">{el.oldPrice} MXN</span>
                  <span className="newprice">{el.price} MXN</span>
                  <button
                    className="btn-reset"
                    onClick={() =>
                      navigate(el.title, {
                        state: {
                          data: el,
                        },
                      })
                    }
                  >
                    AGREGAR
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
