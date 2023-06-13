// import React from 'react'
import { useState } from 'react';
import { FaCodepen, FaDribbble, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
import './Nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [menuClosed, setMenuClosed] = useState(true);
  const linkedin_url = 'https://www.linkedin.com/in/fidelhdz/';
  const codepen_url = 'https://codepen.io/fidelhdz-the-vuer';
  const dribbble_url = 'https://dribbble.com/fidelhdz';
  const behance_url = 'https://be.net/fhdz';
  const github_url = 'https://github.com/fidelhdz';

  return (
    <>
      <nav className="w-full hidden fixed flex-grow justify-center top-0 py-2 backdrop:blur-sm z-10 bg-slate-50 dark:bg-slate-900 opacity-95 lg:flex">
        <ul className='flex flex-row list-none items-center relative opacity-100'>
          {/* <li className='absolute'><div className="small-indicator bg-slate-200 block w-auto h-8"></div></li> */}
          <li><a href="#about" onClick={ () => setActiveNav('#about') } className={ activeNav === '#about' ? 'active' : '' }>About</a></li>
          <li><a href="#experience" onClick={ () => setActiveNav('#experience') } className={ activeNav === '#experience' ? 'active' : '' }>Experience</a></li>
          <li><a href="#skills" onClick={ () => setActiveNav('#skills') } className={ activeNav === '#skills' ? 'active' : '' }>Skills</a></li>
          <li className="center-option"><a href="#" onClick={ () => setActiveNav('#') } className={ activeNav === '#' ? 'active' : '' }>Fidel<span className='text-lime-500'>Hdz</span>.com</a></li>
          <li><a href="#portfolio" onClick={ () => setActiveNav('#portfolio') } className={ activeNav === '#portfolio' ? 'active' : '' }>Portfolio</a></li>
          <li><a href="#testimonials" onClick={ () => setActiveNav('#testimonials') } className={ activeNav === '#testimonials' ? 'active' : '' }>Testimonials</a></li>
          <li><a href="#contact" onClick={ () => setActiveNav('#contact') } className={ activeNav === '#contact' ? 'active' : '' }>Contact</a></li>
        </ul>
      </nav>
      <nav className="w-full fixed flex flex-grow justify-between top-0 py-2 backdrop:blur bg-slate-50 dark:bg-slate-900 opacity-95 lg:hidden z-20">
        <ul className='flex flex-row justify-between flex-grow list-none items-center relative opacity-100'>
          <li className="center-option text-left px-2"><a href="#" onClick={() => setActiveNav('#')}>Fidel<span className='text-lime-500'>Hdz</span>.com</a></li>
          <li className="text-right items-end flex-grow"><a href="javascript:{};" onClick={() => setMenuClosed(!menuClosed)}>{ menuClosed ? 'Menu' : 'Close' }</a></li>
        </ul>
      </nav>
      <div id='sideMenu' className={`fixed h-screen z-10 bg-slate-50 dark:bg-slate-900 opacity-95 backdrop-blur-sm transition-all duration-300 ease-out right-0 w-72 lg:hidden shadow-xl ${ menuClosed ? `hidden` : ``}`}>
        <ul className='flex flex-col list-none items-left relative p-10 mt-10 uppercase font-title text-xl opacity-100'>
          <li><a href="#about" onClick={ () => setActiveNav('#about') } className={ activeNav === '#about' ? 'active' : '' }>About</a></li>
          <li><a href="#experience" onClick={ () => setActiveNav('#experience') } className={ activeNav === '#experience' ? 'active' : '' }>Experience</a></li>
          <li><a href="#skills" onClick={ () => setActiveNav('#skills') } className={ activeNav === '#skills' ? 'active' : '' }>Skills</a></li>
          <li><a href="#portfolio" onClick={ () => setActiveNav('#portfolio') } className={ activeNav === '#portfolio' ? 'active' : '' }>Portfolio</a></li>
          <li><a href="#testimonials" onClick={ () => setActiveNav('#testimonials') } className={ activeNav === '#testimonials' ? 'active' : '' }>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>
          <li className='flex flex-row justify-between mt-10'>
            <a href={ codepen_url } target="_blank"><FaCodepen /></a>
            <a href={ dribbble_url } target="_blank"><FaDribbble /></a>
            <a href={ behance_url } target="_blank"><FaBehance /></a>
            <a href={ linkedin_url } target="_blank"><FaLinkedin /></a>
            <a href={ github_url } target="_blank"><FaGithub /></a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav