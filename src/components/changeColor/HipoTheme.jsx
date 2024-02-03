import React, { useState } from 'react'
import hippo from '../../assets/imagesThemes/hippo.png'

export const HipoTheme = ({closeModal}) => {

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
      <button onClick={() => changeColor('#4A4E69','#FF8FAB','#000814','#F2E9E4','#FB6F92')} className='theme-container theme-container-hippo'>
        <img src={hippo} className='theme-img'/>
          <div className='container-colors'>
          <p className='theme-title'>Pótamo</p>
          <div className='circle-color-container'>
            <div className='circle-color color1-hippo'></div>
            <div className='circle-color color2-hippo'></div>
            <div className='circle-color color3-hippo'></div>
            <div className='circle-color color4-hippo'></div>
            <div className='circle-color color5-hippo'></div>
          </div>
          </div>
      </button>
  )
}
