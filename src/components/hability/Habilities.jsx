import React from "react";
import { MagicMotion } from "react-magic-motion";

export const Habilities = () => {
  return (
    
      <div className="hability-container">
        <div className="hability-container-child">
          <div className="hability-front">
            <figure className="hability-logo-image">
              <img
                className="hability-logo-img"
                src="https://storage.googleapis.com/imagenesportafolio/html-5-svgrepo-com.svg"
                alt="Logo de HTML"
              />
              <img
                className="hability-logo-img"
                src="https://storage.googleapis.com/imagenesportafolio/css-3-svgrepo-com.svg"
                alt="Logo de CSS"
              />
              <img
                className="hability-logo-img"
                src="https://storage.googleapis.com/imagenesportafolio/js-svgrepo-com.svg"
                alt="Logo de JS"
              />
            </figure>
            <hr className="hability-hr" />
            <p className="hability-description">
              Maquetación y diseño frontend, implementando buenas prácticas para
              lograr resultados responsivos y modelos estéticamente intuitivos.
            </p>
          </div>
          <div className="hability-front">
            <figure className="hability-logo-image">
              <img
                className="hability-logo-img"
                src="https://storage.googleapis.com/imagenesportafolio/node-js-svgrepo-com.svg"
                alt="Logo de NodeJs"
              />
            </figure>
            <hr className="hability-hr" />
            <p className="hability-description">
              Construcción de servidores web y APIs para el desarrollo de
              aplicaciones escalables y de alto rendimiento.
            </p>
          </div>
          <div className="hability-front">
            <figure className="hability-logo-image">
              <img
                className="hability-logo-img"
                src="https://storage.googleapis.com/imagenesportafolio/react-svgrepo-com.svg"
                alt="Logo de NodeJs"
              />
            </figure>
            <hr className="hability-hr" />
            <p className="hability-description">
              Desarrollo de interfaces de usuario que sean tanto interactivas
              como eficientes.
            </p>
          </div>
        </div>
      </div>
  );
};
