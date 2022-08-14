import React from 'react'
import {RiMenu3Line,  RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {

    const [toggleMenu , setToggleMenu]= useState(false);

    const Menu =() =>(
        <>
         <p><a href="#home"> Home</a> </p>
     <p><a href="#wgpt3"> What is GPT3?</a></p>
     <p><a href="#possibility"> OpenAI</a></p>
     <p><a href="#features"> Case Studies</a></p>
     <p><a href="#blog"> Library</a></p>
        </>
    )


  return (
    <div className='gpt3__navbar'>
     <div className="gpt3__navbar-links">
  <div className="gpt3__navbar-links-logo">
    <img src={logo} alt=" Logo" />
  </div>
  <div className="gpt3__navbar-links-container">
   <Menu/>

  </div>
     </div>

     <div className="gpt3__navbar-sign">
        <p>Sign in</p> 
        <button type='submit'> Sign Up</button>
     </div>

     <div className="gpt3__navbar-menu">

     {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}

          {toggleMenu && (

            <div className="gpt3__navbar-menu-container scale-up-center">
                <div className="gpt3__navbar-menu-container-links">
                    <Menu/>
                </div>
                <div className="gpt3__navbar-menu-links-sign">
        <p>Sign in</p> 
        <button type='submit'> Sign Up</button>
     </div>

            </div>
          )}


     </div>
    </div>
  )
}

export default Navbar
