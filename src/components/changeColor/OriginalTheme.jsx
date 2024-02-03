import React, { useState } from 'react'
import original from '../../assets/imagesThemes/correct.png'

export const OriginalTheme = ({ closeModal }) => {

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
        <button onClick={() => changeColor('#1B2432','#2ba84a','#fcfffc','#040f0f','#248232')} className='theme-container theme-container-original'>
          <img src={original} className='theme-img'/>
          <div className='container-colors'>
          <p className='theme-title'>Original</p>
          <div className='circle-color-container'>
            <div className='circle-color color1-original'></div>
            <div className='circle-color color2-original'></div>
            <div className='circle-color color3-original'></div>
            <div className='circle-color color4-original'></div>
            <div className='circle-color color5-original'></div>
          </div>
          </div>
        </button>
  )
}