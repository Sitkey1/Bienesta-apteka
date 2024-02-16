import { useLocation } from "react-router-dom";
import "./style.scss";

export const ProductPage = () => {
  const { state } = useLocation();
  const { title, type, subDescr, oldPrice, price, descr, img } = state;
  return (
    <section className="product-card ">
      <div className="container">
        {
          <div>
            <div className="image-box">
              <img src={`/image/${img}`} alt="" />
            </div>
            <div className="wrapper-box">
              <div className="left-box">
                <h2>{title}</h2>
                <span>{subDescr}</span>
              </div>
              <div className="right-box">
                <div className="oldprice">{oldPrice} MXN</div>
                <div className="newprice">{price} MXN</div>
              </div>
            </div>
            <button className="btn-reset btn">AGREGAR</button>
            <div className="descr-box">
              <span>description</span>
              <p className="descr">{descr}</p>
              <span>optiones</span>
              <button className="btn-reset btn-rewiew">
                escribir una opinión
              </button>
              {/* TODO: отзывы из rewiew.json */}
              <p className="descr"></p>
            </div>
          </div>
        }
      </div>
    </section>
  );
};
