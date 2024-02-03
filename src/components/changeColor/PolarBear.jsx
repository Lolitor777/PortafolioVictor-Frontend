import React, { useState } from 'react'
import polar from '../../assets/imagesThemes/polarBear.png'

export const PolarBearTheme = ({ closeModal }) => {

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
    <div>
        <button onClick={() => changeColor('#F1FAEE','#457B9D','#000000','#8D99AE','#1D3557')} className='theme-container theme-container-polar'>
        <img src={polar} className='theme-img'/>
          <div className='container-colors'>
          <p className='theme-title'>Polar</p>
          <div className='circle-color-container'>
            <div className='circle-color color1-polar'></div>
            <div className='circle-color color2-polar'></div>
            <div className='circle-color color3-polar'></div>
            <div className='circle-color color4-polar'></div>
            <div className='circle-color color5-polar'></div>
          </div>
          </div>
        </button>
    </div>
  )
}