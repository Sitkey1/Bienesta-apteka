import { useState } from "react";
import "./style.scss";
import { BasketStore } from "../../Store/BasketStore";
import { Form } from "./components/Form";

const countProducts = () =>
  Object.values(
    BasketStore.getAll().reduce((p, v) => {
      const old = p[v.title];
      if (!old) p[v.title] = { ...v, count: 1 };
      else if (old.sort > v.sort) p[v.title] = { ...v, count: old.count + 1 };
      else p[v.title].count++;
      return p;
    }, {})
  );

const checkTotalPrice = () => {
  let total = 0;
  BasketStore.getAll().forEach((el) => {
    total += Number(el.price);
  });
  return total;
};

export const BasketPage = () => {
  const [basket, setBasket] = useState(countProducts());

  return (
    <div>
      <section className="basket-section">
        <div className="container">
          <ul className="list-reset">
            {basket.map((element) => {
              return (
                <li key={element.id}>
                  <div className="image-box">
                    <img src={`/image/${element.img}`} alt="product" />
                  </div>
                  <div className="wrapper-box">
                    <h4>{element.title}</h4>
                    <span className="descr">{element.subDescr}</span>
                    <div className="box">
                      <span className="price">{element.price} MXN</span>
                      <div className="counter">
                        <button
                          onClick={() => {
                            BasketStore.remove(element);
                            setBasket(countProducts());
                          }}
                          className="btn-reset"
                        >
                          &minus;
                        </button>
                        <span>{element.count}</span>
                        <button
                          onClick={() => {
                            BasketStore.add(element);
                            setBasket(countProducts());
                          }}
                          className="btn-reset"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
            <span className="total-price">
              importe total: {checkTotalPrice()}
            </span>
            <Form basket={basket} />
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
