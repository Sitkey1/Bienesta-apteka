import { SearchBox } from "../Search";
import "./style.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <SearchBox />
        <div className="link-box">
          <a href="/">Contacto</a>
          <a href="/">
            cómo hacer <br /> un pedido
          </a>
        </div>
      </div>
    </section>
  );
};
