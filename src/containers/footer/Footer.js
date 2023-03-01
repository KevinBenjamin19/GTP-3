import React from 'react'
import './footer.css'

import logo from '../../assets/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'


const Footer = () => {
  return (
    <div className='gpt3__footer'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button type='button'>Request Early Access</button>
      </div>
      <div className='gpt3__footer-container'>
        <div className='gpt3__footer-container-title'>
          <img src={logo} alt='gpt-3'/>
          <p>Crechterwoord K12 182 DK Alknjkcb,<br /> All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-container-links'>
          <h3>Links</h3>
          <ul>
            <li><a href='#'>Overons</a></li>
            <li><a href='#'>Social Media</a></li>
            <li><a href='#'>Counters</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='gpt3__footer-container-comments'>
          <h3>Comments</h3>
          <ul>
            <li><a href='#'>Terms & Conditions</a></li>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='gpt3__footer-container-git'>
          <h3>Get in touch</h3>
          <ul>
            <li>Crechterwoord K12<br /> 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <p> <FontAwesomeIcon icon={faCopyright}/> 2023 GPT-3. All rights reserved.<br />  Made by <span className='gradient__text'> Kevin Benjamin </span></p>
    </div>
  )
}

export default Footer