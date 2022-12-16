import React from 'react'
import "./Footer.css"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

import Wave from '../img/wave.png'





const Footer = () => {
  return (
    <div className='footer mt-4'>
      <img src={Wave} alt="" style={{width: '100%'}}/>
      <div className="f-content">
      <span>mobeenkeepsCode@gmail.com</span>
      <div className="f-icons">
      <Insta color='white' size='2.5rem'  />
      <Facebook color='white' size='2.5rem'  />
      <Github color='white' size='2.5rem'  />

      </div>

      </div>
    </div>
  )
}

export default Footer

