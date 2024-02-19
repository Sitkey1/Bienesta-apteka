import { useCallback, useEffect, useMemo, useState } from "react";
import "./style.scss";
import { BasketStore } from "../../BasketStore";
import products from "../../data/products.json";

// TODO: странное поведение счетчика , при увеличении илии уменьшении количества
const countProducts = () => {
  var count = {};
  BasketStore.getAll().forEach(function (i) {
    count[i.title] = (count[i.title] || 0) + 1;
  });
  return count;
};

export const BasketPage = () => {
  const [basket, setBasket] = useState(BasketStore.getAll());
  return (
    <div>
      <section className="basket-section">
        <div className="container">
          <ul className="list-reset">
            {/* TODO: Подумать как сделать проще */}
            {basket
              ?.filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i)
              ?.map((el, index) => {
                return (
                  <li key={Math.random()}>
                    <div className="image-box">
                      <img src={`/image/${el.img}`} alt="product" />
                    </div>
                    <div className="wrapper-box">
                      <h4>{el.title}</h4>
                      <span className="descr">{el.subDescr}</span>
                      <div className="box">
                        <span className="price">{el.price} MXN</span>
                        <div className="counter">
                          <button
                            className="btn-reset"
                            onClick={() => {
                              BasketStore.remove(index);
                              setBasket(BasketStore.getAll());
                            }}
                          >
                            &minus;
                          </button>
                          <span>{countProducts()[el.title]}</span>
                          <button
                            className="btn-reset"
                            onClick={() => {
                              BasketStore.add(el);
                              setBasket(BasketStore.getAll());
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            <span className="total-price">importe total: </span>
            <form action="#" className="form">
              <span>realización del pedido</span>
              <input type="text" placeholder="Nombre" required />
              <input type="number" placeholder="Número de teléfono" required />
              <button className="btn-reset">comprar</button>
            </form>
          </ul>
        </div>
      </section>
      <div className="modal">
        <div className="container">
          <h3>¡Gracias!</h3>
          <span>su pedido ha sido aceptado</span>
          <p>
            Nuestro responsable se pondrá en contacto con usted en breve para
            confirmar su pedido.{" "}
          </p>
          <button className="btn-reset">hogar</button>
        </div>
      </div>
    </div>
  );
};
