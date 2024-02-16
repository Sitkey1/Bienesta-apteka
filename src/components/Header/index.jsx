import { Link } from "react-router-dom";
import "./style.scss";
import { routeNames } from "../../navigation/routeNames";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <Link replace to={routeNames.main} className="img-1">
            HOGAR
          </Link>
          <Link replace to={routeNames.categories} className="img-2">
            CATEGORÍAS
          </Link>
          <Link replace to={routeNames.basket} className="img-3">
            CARRITO
          </Link>
          <Link replace to={routeNames.information} className="img-4">
            INFORMACIÒN
          </Link>
        </div>
      </div>
    </header>
  );
};
