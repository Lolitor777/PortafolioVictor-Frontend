import React, { useState } from "react";
import Modal from "react-modal";
import { SelectPhoto } from "./SelectPhoto";
import { useForm } from "../../../hooks/useForm";
import { validationsFormComment } from "../../../helpers/validationForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const URL = `${import.meta.env.VITE_URL_SERVER}comment`;

export const Create = ({ updateComment }) => {
  const initialValues = {
    name: "",
    description: "",
  };

  const [photo, setPhoto] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { form, errors, handleBlur, handleChange } = useForm(
    initialValues,
    validationsFormComment
  );

  validationsFormComment(form);

  let id_photo = photo;

  const handlePhotoChange = (value) => {
    setPhoto(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length < 1) {
      if (id_photo == 0) {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Por favor selecciona una foto",
          iconColor: "#e3761d",
          confirmButtonText: "Vale",
          confirmButtonColor: "#47A8BD",
        });
      } else {
        await axios.post(`${URL}/crearComentario`, {
          name: form.name,
          id_photo,
          description: form.description,
        });
        closeModal();
        updateComment();
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Por favor rellene los campos correctamente",
        iconColor: "#e3761d",
        confirmButtonText: "Vale",
        confirmButtonColor: "#47A8BD",
      });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="input-container">
    <div className="btn-openModal-container">
    <button onClick={openModal} className="btn-create btn-open-modal">
        Comentar
      </button>
    </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#214a8d8d",
          },
          content: {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            margin: "auto",
            width: "100%",
            maxWidth: "600px",
            height: "450px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px"
          },
        }}
      >
        <form onSubmit={handleSubmit} className="form-container">
          <div className="select-container">
            <label className="label-select">
              Escoge la foto que más te guste
            </label>
            <SelectPhoto onPhotoChange={handlePhotoChange} />
          </div>
          <div className="input-container-child">
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              placeholder="¿Cuál es tu nombre?"
              className="input-box"
            />
          </div>
          <div className="input-container-child">
            <input
              type="text"
              name="description"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.description}
              placeholder="Inspírate"
              className="input-box"
            />
          </div>
          <div>
          {errors.select && <p className="input-error">{errors.select}</p>}
          {errors.name && <p className="input-error">{errors.name}</p>}
          {errors.description && (<p className="input-error">{errors.description}</p>)}
          </div>
          <button type="submit" className="btn-create" onClick={handleSubmit}>
            Comentar
          </button>
        </form>
      </Modal>
    </div>
  );
};
