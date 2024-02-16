import { Link, Outlet } from "react-router-dom";
import { routeNames } from "../../navigation/routeNames";
import "./style.scss";

export const InformationPage = () => {
  return (
    <div className="container">
      <section className="info-section">
        <h2>LOS INFORMES </h2>
        <ul className="list-info list-reset">
          <li>
            <Link to={routeNames.contacts}>Contacto</Link>
          </li>
          <li>
            <Link to={routeNames.faq}>Preguntas frecuentes</Link>
          </li>
          <li>
            <Link to={routeNames.policy}>Políticas de Privacidad</Link>
          </li>
          <li>
            <Link to={routeNames.news}>Novedades</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
