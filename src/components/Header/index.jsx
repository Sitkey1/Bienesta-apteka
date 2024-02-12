import { Link } from "react-router-dom";
import "./style.scss";
import { routeNames } from "../../navigation/routeNames";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <Link to={routeNames.main} className="img-1">
            HOGAR
          </Link>

          <Link to={routeNames.categories} className="img-2">
            CATEGORÍAS
          </Link>
          <Link to={routeNames.basket} className="img-3">
            CARRITO
          </Link>
          <Link to={routeNames.information} className="img-4">
            INFORMACIÒN
          </Link>
        </div>
      </div>
    </header>
  );
};
