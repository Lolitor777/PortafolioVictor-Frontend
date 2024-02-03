import React, { useState } from 'react'
import tortoise from '../../assets/imagesThemes/turtle.png'

export const TortoiseTheme = ({ closeModal }) => {

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
        <button onClick={() => changeColor('#588157','#582F0E','#F1FAEE','#001D3D','#333D29')} className='theme-container theme-container-tortoise'>
          <img src={tortoise} className='theme-img'/>
          <div className='container-colors'>
          <p className='theme-title'>Tortuga</p>
          <div className='circle-color-container'>
            <div className='circle-color color1-tortoise'></div>
            <div className='circle-color color2-tortoise'></div>
            <div className='circle-color color3-tortoise'></div>
            <div className='circle-color color4-tortoise'></div>
            <div className='circle-color color5-tortoise'></div>
          </div>
          </div>
        </button>
  )
}