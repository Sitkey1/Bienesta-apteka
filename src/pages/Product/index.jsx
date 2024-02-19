import { useLocation } from "react-router-dom";
import "./style.scss";

export const ProductPage = () => {
  const { state } = useLocation();
  const { title, type, subDescr, oldPrice, price, descr, img } = state;
  return (
    <section className="product-section">
      <div className="container">
        {
          <div className="card">
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
            <div className="modal-rewiews">
              <div className="modal-overlay">
                <div className="modal-form">
                  <span>nueva opinion</span>
                  <form action="#" className="form">
                    <textarea
                      type="text"
                      placeholder="nueva opinion.."
                      required
                    />
                    <label>
                      <input type="text" required />
                      <span>Nombre</span>
                    </label>
                    <label>
                      <input type="tel" required />
                      <span>Edad</span>
                    </label>
                    <label>
                      <input type="email" required />
                      <span>Сorreo electrónico</span>
                    </label>
                    <button className="btn-reset">publicar</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-rewiews-answer">
              <div className="modal-overlay-answer">
                <div className="modal-answer">
                  <span>su comentario ha sido enviado a moderación</span>
                  <button className="btn-reset">atrás</button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  );
};
