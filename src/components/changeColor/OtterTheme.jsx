import React, { useState } from 'react'
import otter from '../../assets/imagesThemes/otter.png'

export const OtterTheme = ({ closeModal }) => {

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
        <button onClick={() => changeColor('#A68A64','#0077B6','#000814','#F2E9E4','#0077B6')} className='theme-container theme-container-otter'>
          <img src={otter} className='theme-img'/>
          <div className='container-colors'>
          <p className='theme-title'>Nutria</p>
          <div className='circle-color-container'>
            <div className='circle-color color1-otter'></div>
            <div className='circle-color color2-otter'></div>
            <div className='circle-color color3-otter'></div>
            <div className='circle-color color4-otter'></div>
            <div className='circle-color color5-otter'></div>
          </div>
          </div>
        </button>
  )
}
