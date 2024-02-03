import { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import axios from "axios";

const URL = `${import.meta.env.VITE_URL_SERVER}comment`;

export const Comments = ({ newComment }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getComments();
  }, [newComment]);

  const getComments = async () => {
    const res = await axios.get(`${URL}/consultarComentario`);
    setComment(res.data.comment);
  };

  const changeDate = (date) => {
    const formatDate = new Date(date);
    const anio = formatDate.getFullYear();
    const month = formatDate.getMonth();
    const day = formatDate.getDate();
    const finalDate = `${day}/${month + 1}/${anio}`;

    return finalDate;
  };

  return (
      <div className="comment-container">
        <h3 className="comment-paragraph">Escribeme lo que quieras!</h3>
        <div className="comment-container-child">
          {comment.map((item) => (
            <div className="comment-flex" key={item.id}>
              <figure className="comment-image">
                <img
                  className="comment-img"
                  src={item.tb_photo.description}
                  alt=""
                />
              </figure>
              <div className="comment-content">
                <h4 className="comment-name">{item.name}</h4>
                <p className="comment-description">{item.description}</p>
              </div>
              <p className="comment-date">{changeDate(item.createdAt)}</p>
            </div>
          ))}
        </div>
      </div>
  );
};
