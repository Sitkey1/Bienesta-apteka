import { Link, useLocation } from "react-router-dom";
import "./";
import { SearchBox } from "../../components/Search";
import "./style.scss";
import { BasketStore } from "../../Store/BasketStore";
import { useState } from "react";
// import products from "../../data/products.json";

export const CategoryPage = (props) => {
  const { state } = useLocation();
  const [basket, setBasket] = useState(BasketStore.getAll());

  const itemInBasket = (itemID) => basket.some((item) => item.id === itemID);

  return (
    <section className="category-section">
      <div className="container">
        <SearchBox />
        <ul className="list-reset">
          {state.map((el) => {
            return (
              <li key={el.id}>
                <div className="img-box">
                  <img src={`/image/${el.img}`} alt="product" />
                </div>
                <div className="wrapper-box">
                  <Link to={el.title} state={el}>
                    <h4>{el.title}</h4>
                  </Link>
                  <span>{el.subDescr}</span>
                  <span className="oldprice">{el.oldPrice} MXN</span>
                  <span className="newprice">{el.price} MXN</span>
                  <button
                    onClick={() => {
                      BasketStore.add(el);
                      setBasket(BasketStore.getAll());
                    }}
                    className="btn-reset"
                    disabled={itemInBasket(el.id) || el.notAvailable}
                  >
                    {el.notAvailable
                      ? "Товара нет в наличи"
                      : itemInBasket(el.id)
                      ? "уже есть"
                      : "AGREGAR"}
                    {/* {itemInBasket(el.id) ? "уже есть " : "AGREGAR"} */}
                    {/* {basket ?? [].find((item) => item.id === el.id)
                      ? "уже есть "
                      : "AGREGAR"} */}
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
