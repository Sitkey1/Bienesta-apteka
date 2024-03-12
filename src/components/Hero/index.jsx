import { Link } from "react-router-dom";
import { SearchBox } from "../Search";
import "./style.scss";
import { routeNames } from "../../navigation/routeNames";
//TODO:  Убрать или преименовать в HeaderSearch
export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <SearchBox />
        <div className="link-box">
          <Link to={routeNames.contacts}>Contacto</Link>
          <Link to={routeNames.contacts}>
            cómo hacer <br /> un pedido
          </Link>
        </div>
      </div>
    </section>
  );
};
