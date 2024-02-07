import { Link } from "react-router-dom";
import { routeNames } from "../../navigation/routeNames";

export const InformationPage = () => {
  return (
    <div>
      <span>Info</span>
      <Link to={routeNames.contacts}>Contacts</Link>
    </div>
  );
};
