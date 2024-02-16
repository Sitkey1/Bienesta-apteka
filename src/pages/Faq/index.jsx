import "./style.scss";

export const FaqPage = () => {
  return (
    <section className="fag-section">
      <div className="container">
        <h2 className="title-section">Preguntas frecuentes</h2>
        <div className="text-block">
          <span>Condiciones de entrega:</span>
          <p>
            Plazo de entrega: Garantizamos una entrega rápida dentro de 3-7
            días, dependiendo de donde usted vive. Nos esforzamos para que la
            entrega sea lo más rápida y cómoda posible para usted.
          </p>
        </div>
        <div className="text-block">
          <span>Gastos de envío:</span>
          <p>
            Los gastos de envío se calculan individualmente para cada pedido y
            se comentan con nuestro gestor después de realizar el pedido. Nos
            esforzamos por ofrecer las tarifas más competitivas y transparentes
            para nuestros clientes.
          </p>
        </div>
        <div className="text-block">
          <span>Política de cambios y devoluciones:</span>
          <p>
            Si tiene alguna duda sobre la devolución o el cambio de productos,
            nuestro gestor está siempre dispuesto a ayudarle. Comente todos los
            detalles con él y nos esforzaremos por encontrar la mejor solución
            para satisfacer sus necesidades.
          </p>
        </div>
        <div className="text-block">
          <span>Condiciones de pago:</span>
          <p>
            Pago a la recepción: para su comodidad, le ofrecemos cómodas
            opciones de pago a la recepción de su pedido. Puede elegir entre las
            siguientes opciones de pago: Pago en efectivo: Puede pagar su pedido
            en efectivo al mensajero en el momento de la entrega. Pago con
            tarjeta a través de terminal: Le ofrecemos la opción de pagar con
            tarjeta de crédito a través de un terminal móvil en el momento de la
            entrega. En el momento de la entrega: También puede pagar en
            efectivo o con tarjeta en el momento de la entrega. Agradecemos su
            confianza y nos esforzamos por hacer que el proceso de pago y
            entrega sea lo más fácil y cómodo posible. Si tiene alguna pregunta
            adicional o necesita ayuda, nuestros gestores están siempre
            dispuestos a ayudarle.
          </p>
        </div>
      </div>
    </section>
  );
};
