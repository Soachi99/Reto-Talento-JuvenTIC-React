import React from "react";

export default function OurHistory() {
  return (
    <div className="contenedor-nosotros" id="historia">
      <img
        className="imagen"
        src={process.env.PUBLIC_URL + "/images/foto_nosotros.png"}
        alt = "Nosotros"
      />

      <div className="informacion">
        <div className="titulo">
          <span>nuestra</span>
          <span>historia</span>
        </div>

        <p>
          Nuesto restaurante se fundo el 10 de Septiembre de 2021, con la idea
          de brindar un servicio unico e innovador a cada uno de los clientes.
          Nuestra tematica es de cartoon, fundamentado principalmente por
          batman, el cual fue una inspiración para nosotros cuando eramos niños
          y que forma de rendirle un homenaje haciendo lo que nos gusta con su
          imagen acompañandonos <br />
          Somos un restaurante innovador, que tiene como misión traer un
          concepto diferente en sabores y experiencias a nivel nacional. Somos
          los creadores de la autentica y exclusiva <b>Pizza Cartoon</b> que ha
          generado en los paladares de nuestros comensales sensaciones nunca
          antes experimentadas, por la sazón y calidad que manejan nuestros
          chefs y nuestro restaurante como tal. Disfruta de la mejor pizza
        </p>
      </div>
    </div>
  );
}
