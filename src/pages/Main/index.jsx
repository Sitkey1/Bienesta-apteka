// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Hero } from "../../components/Hero";
import data from "../../data/products.json";
import { routeNames } from "../../navigation/routeNames";
import "./style.scss";
import { BasketStore } from "../../BasketStore";

export const MainPage = () => {
  // const navigate = useNavigate();
  const sliderData = [data[3], data[7], data[9], data[11], data[15]];
  return (
    <div>
      <Hero />

      <ul className="ticker list-reset">
        <li>
          <img src={require(`./images/oferta1.png`)} alt="category" />
        </li>
        <li>
          <img src={require(`./images/oferta2.png`)} alt="category" />
        </li>
      </ul>

      <ul className="product-slider list-reset">
        {sliderData.map((el) => (
          <li key={el.id}>
            <div className="img-box">
              <img src={`/image/${el.img}`} alt="rr" />
            </div>
            <span className="title">{el.title}</span>
            <span className="subtitle">{el.subDescr}</span>
            <span className="oldprice">{el.oldPrice} MXN</span>
            <span className="newprice">{el.price} MXN</span>
            <button className="btn-reset" onClick={() => BasketStore.add(el)}>
              AGREGAR
            </button>
            {/* <Link state={el} to={el.title}>
              AGREGAR
            </Link> */}
          </li>
        ))}
      </ul>

      {/* <button onClick={() => navigate(routeNames.categories)}>go</button> */}
    </div>
  );
};
