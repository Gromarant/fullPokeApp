import { useState, useRef } from 'react';
import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const NavBar = () => {  
  const navbarToggleRef = useRef()
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const [activeMenu, setActiveMenu] = useState(
		window.location.href.split(`${window.location.origin}`)[1],
	)

  const handleSideMenu = (link) => {
    setActiveMenu(link);
    isSideMenuOpen && navbarToggleRef.current.click();
  }

  const collapseItems = [
    {
      name: "Memory Game",
      link: "/",
    },
    {
      name: "Search",
      link: "/search",
    },
    {
      name: "Create Pokémon",
      link: "/create",
    },
  ];

  return (
    <>
      <Navbar>
          <Navbar.Toggle 
            ref={navbarToggleRef}
            onChange={(isSelected) => setIsSideMenuOpen(isSelected)}
          />
        <Navbar.Content>
          <li className='navBar__item'>
            <Link className='navBar__link' to="/">Memory Game</Link>
          </li>
          <li className='navBar__item'>
            <Link className='navBar__link' to="/search">Search</Link>
          </li>
          <li className='navBar__item'>
            <Link className='navBar__link'  to="/create">Create Pokemon</Link>
          </li>
        </Navbar.Content>
        <Navbar.Collapse className='collapse__menu'>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem 
            key={item.name}
            isActive={item.link === activeMenu}
          >
            <Link to={item.link} onClick={() => handleSideMenu(item.link)}>{item.name}</Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  </>
  );
};

export default NavBar;