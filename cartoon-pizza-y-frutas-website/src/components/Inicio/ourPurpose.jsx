import React from "react";
import "./ourPurpose.css";

class nosotros extends React.Component {
  render() {
    return (
      <div className="nuestra_propuesta">
        <div className="nosotros">
          <img
            src={process.env.PUBLIC_URL + "/images/banner_nosotros.png"}
            className="img-fluid w-100"
            id="nosotros"
            alt="nosotros"
          />

          <h1>
            <b>Nuestra propuesta</b>
          </h1>
          <p>
            Somos un restaurante innovador, que tiene como misión traer un
            concepto diferente en sabores y experiencias a nivel nacional.Somos
            los creadores de la autentica y exclusiva <b>Pizza Cartoon</b> que
            ha generado en los paladares de nuestros comensales sensaciones
            nunca antes experimentadas, por la sazón y calidad que manejan
            nuestros chefs y nuestro restaurante como tal. ¡Disfruta de la mejor
            pizza!{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default nosotros;
