import React from "react";
const img =
  "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b13305_1.jpg";

const price = 4.26

const Card = () => {
  return (
    <article className="col-3 d-flex flex-column justify-content-center align-items-center">
      <img src={img} alt="immagine di card" className="img-fluid" />
      <div className="text-center w-100">
        <h6>200€ Airbnb +400P</h6>
        <div className="divisore my-3"></div>
        <h5 className="price fw-bold">{price}</h5>
        <h6>utente1021</h6>
        <p className="timer fw-bold">00:05</p>
        <div className="puntata">PUNTA</div>
      </div>
    </article>
  );
};

export default Card;
