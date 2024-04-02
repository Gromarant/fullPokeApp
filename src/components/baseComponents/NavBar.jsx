import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaX } from "react-icons/fa6";

function NavBar() {
  const [ open, setOpen ] = useState(false);
  const dropdownRef = useRef();

  return(
    <nav className='navbar'>
      <button className='navbar__menu' onClick={() => setOpen(!open)}>{open ? <FaX className='icon'/> : <FaBars className='icon'/>}</button>
      <nav className={`navbar__links ${open ? 'menu' : ''}`} ref={dropdownRef}>
        <ul className='links'>
          <li><NavLink to='/'>Memory Game</NavLink></li>
          <li><NavLink to='/search'>Search</NavLink></li>
          <li><NavLink to='/create'>Create Pokémon</NavLink></li>
        </ul>
      </nav>
    </nav>
  )
}

export default NavBar;