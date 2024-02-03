import { useEffect, useState } from "react";
import axios from "axios";


const URL = `${import.meta.env.VITE_URL_SERVER}project`;

export const Home = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    const res = await axios.get(`${URL}/consultarProyecto`);
    setProject(res.data.project);
  };

  return (
    
      <div className="home-container">
        <article className="home-container-child">
          <p className="home-welcome">
            <span className="home-greeting">HOLA MI NOMBRE ES VICTOR</span>
            <br />
            <span className="home-make">Creo sitios web desde cero.</span>
            <br />
            Te doy la bienvenida a mi portafolio. Espero que puedas conocerme y
            tener una buena impresión de mí. Si te surge alguna pregunta, puedes
            contactarme.
          </p>
        </article>
        <div className="project-container">
          <h3 className="project-header">Proyectos</h3>
          <div className="project-container-child">
            {project.map((item) => (
              <figure className="project-image" key={item.id}>
                <img src={item.photo} className="project-img" />
                <h2 className="project-title">{item.name}</h2>
                {item.link ? (
                  <a
                    href={item.link}
                    className="project-link"
                    target="_blank"
                  ></a>
                ) : (
                  false
                )}
              </figure>
            ))}
          </div>
        </div>
      </div>
  );
};
