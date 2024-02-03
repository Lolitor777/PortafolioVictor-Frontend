import React, { useState } from 'react'
import penguin from '../../assets/imagesThemes/penguin.png'

export const PenguinTheme = ({ closeModal }) => {

    const [color, setColor] = useState('');


    const changeColor = (newColor1, newColor2, newColor3, newColor4, newColor5) => {
        setColor(newColor1)
        document.documentElement.style.setProperty('--color-one', newColor1)
        document.documentElement.style.setProperty('--color-two', newColor2)
        document.documentElement.style.setProperty('--color-three', newColor3)
        document.documentElement.style.setProperty('--color-four', newColor4)
        document.documentElement.style.setProperty('--color-five', newColor5)
        
        closeModal()
    }

  return (
        <button onClick={() => changeColor('#0D1B2A','#FFBE0B','#fcfffc','#000814','#FCBF49')} className='theme-container theme-container-penguin'>
          <img src={penguin} className='theme-img'/>
          <div className='container-colors'>
          <p className='theme-title'>Pingüino</p>
          <div className='circle-color-container'>
            <div className='circle-color color1-penguin'></div>
            <div className='circle-color color2-penguin'></div>
            <div className='circle-color color3-penguin'></div>
            <div className='circle-color color4-penguin'></div>
            <div className='circle-color color5-penguin'></div>
          </div>
          </div>
        </button>
  )
}