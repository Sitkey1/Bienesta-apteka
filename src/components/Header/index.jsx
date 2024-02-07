import { Link } from "react-router-dom";
import "./style.scss";
import { routeNames } from "../../navigation/routeNames";

export const Header = () => {
  return (
    <header>
      <Link to={routeNames.information}>info</Link>
    </header>
  );
};
