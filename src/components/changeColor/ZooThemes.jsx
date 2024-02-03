import React, { useState } from "react";
import rodillo from "../../assets/imagesThemes/rodillo.png";
import { PenguinTheme } from "./PenguinTheme";
import { HipoTheme } from "./HipoTheme";
import { OtterTheme } from "./OtterTheme";
import { TortoiseTheme } from "./TortoiseTheme";
import { PolarBearTheme } from "./PolarBear";
import { OriginalTheme } from "./OriginalTheme";
import Modal from "react-modal";


export const ZooThemes = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className={`aside-container`}>
      <button onClick={openModal} className="rodillo">
        <img src={rodillo} alt="" />
      </button>
      <Modal isOpen={isModalOpen}
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
        }}>
        <aside className="aside-theme-container">
          <div className="aside-theme-container-child">
            <OriginalTheme closeModal={closeModal}/>
            <PenguinTheme closeModal={closeModal} />
            <HipoTheme closeModal={closeModal}/>
            <OtterTheme closeModal={closeModal}/>
            <TortoiseTheme closeModal={closeModal}/>
            <PolarBearTheme closeModal={closeModal}/>
          </div>
        </aside>
        <p className="theme-paragraph">
        ¿Disfrutas de la compañía de los animales? Elige el tema que más te atraiga para que realices un recorrido por mi portafolio.
        </p> 
      </Modal>
    </div>
  );
};
