import "./style.scss";

export const ContactsPage = () => {
  return (
    <section className="section contacts-section">
      <div className="container">
        <h2 className="title-section">Contacto</h2>
        <div className="form-contacts">
          <form action="#" className="form">
            <label>
              <span className="title-label">Selecciona un asunto *</span>
              <select>
                <option value="">escoge una opción</option>
                <option value="dog">Producos</option>
                <option value="cat">Sugerencias</option>
                <option value="hamster">Reclamaciones</option>
                <option value="hamster">Otros</option>
              </select>
            </label>
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
            <label>
              <span className="message-label">Mensaje *</span>
              <textarea type="text" required />
            </label>
            <button className="btn-reset">ENVIAR</button>
          </form>
        </div>
      </div>
    </section>
  );
};
