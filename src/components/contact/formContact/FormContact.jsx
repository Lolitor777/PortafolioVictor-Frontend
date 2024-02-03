import { validationsFormContact } from "../../../helpers/validationForm";
import { useForm } from "../../../hooks/useForm";
import axios from "axios";
import Swal from "sweetalert2";

const URL = `${import.meta.env.VITE_URL_SERVER}contact`;

export const FormContact = () => {
  const initialValues = {
    name: "",
    last_name: "",
    email: "",
    description: "",
  };

  const { form, errors, handleBlur, handleChange } = useForm(
    initialValues,
    validationsFormContact
  );

  validationsFormContact(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(errors);
    if (Object.keys(errors).length < 1) {
      const res = await axios.post(`${URL}/crearContacto`, {
        name: form.name,
        last_name: form.last_name,
        email: form.email,
        description: form.description,
      });

      Swal.fire({
        icon: "success",
        title: "Genial ^-^",
        text: res.data.msg,
        iconColor: "#e3761d",
        confirmButtonText: "Vale",
        confirmButtonColor: "#47A8BD",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Por favor llena todos los campos",
        iconColor: "#e3761d",
        confirmButtonText: "Vale",
        confirmButtonColor: "#47A8BD",
      });
    }
  };

  return (
    <div className="formContact-container">
      <form onSubmit={handleSubmit} className="formContact-container-child">
        <h2 className="formContact-title">
          Estoy emocionado por conocerte e interactuar contigo!
        </h2>
        <div className="box-container">
          <div className="input-names">
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              placeholder="Nombre"
              className="formContact-box-names formContact-box"
            />
            <input
              type="text"
              name="last_name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.last_name}
              placeholder="Apellido"
              className="formContact-box-names formContact-box"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              placeholder="Correo electrónico"
              className="formContact-box"
            />
          </div>
          <div>
            <input
              type="text-area"
              name="description"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.description}
              placeholder="Asunto"
              className="formContact-box"
            />
          </div>
        </div>
        <div className="formContact-error-container">
          {errors.name && <p className="formContact-error">{errors.name}</p>}
          {errors.last_name && <p className="formContact-error">{errors.last_name}</p>}
          {errors.email && <p className="formContact-error">{errors.email}</p>}
          {errors.description && <p className="formContact-error">{errors.description}</p>}
        </div>
        <button type="submit" className="btn-create btn-formContact">
          Enviar
        </button>
      </form>
    </div>
  );
};
