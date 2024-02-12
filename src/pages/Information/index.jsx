import { Link } from "react-router-dom";
import { routeNames } from "../../navigation/routeNames";
import "./style.scss";
import { Header } from "../../components/Header";

export const InformationPage = () => {
  return (
    <div>
      <Header />
      <main className="info">
        <div className="container">
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
        </div>
      </main>
    </div>
  );
};
