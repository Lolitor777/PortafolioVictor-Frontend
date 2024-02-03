import axios from "axios";
import { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import Select from 'react-select';

const URL = `${import.meta.env.VITE_URL_SERVER}photo`;

export const SelectPhoto = ({ onPhotoChange }) => {
  
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const res = await axios.get(`${URL}/consultarFotos`);
        setPhoto(res.data.photo);
      } catch (error) {
        console.error("Error al obtener las fotos:", error);
      }
    };

    fetchPhoto();
  }, []);

  const handlePhotoChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    onPhotoChange(value);
  };

  const options = photo.map((item) => ({
    value: item.id,
    image: item.description
  }));

  return (
    
      <div>
        <Select
          options={options}
          onChange={handlePhotoChange}
          isSearchable={false}
          components={{
            Option: CustomOption
          }}
          styles={{
            control: (provided) => ({
              ...provided,
              width: '150px',
            }),
          }}
        />
      </div>
  );
};

const CustomOption = ({ innerProps, label, data }) => (
  <div
    {...innerProps}
    style={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <img src={data.image} alt={`Imagen ${label}`}
      style={{
        width: "80%",
        height: "50px",
        marginTop: "10px",
        borderBottom: "#1B2432 1px solid",
        paddingBottom: "10px"
      }} />
  </div>
);
