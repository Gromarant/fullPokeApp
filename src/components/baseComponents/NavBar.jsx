import { useState, useRef } from 'react';
import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const NavBar = () => {  
  const navbarToggleRef = useRef()
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState(
		window.location.href.split(`${window.location.origin}`)[1],
	)


  const handleSideMenu = (link) => {
    setActiveMenu(link);
    isSideMenuOpen && navbarToggleRef.current.click();
  }

  const menuItems = [
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
      <Navbar css={{ 
        background: '$primary',
      }}>
          <Navbar.Toggle css={{ jc: "flex-end" }}
            showIn="xs"
            aria-label="toggle navigation"
            ref={navbarToggleRef}
            onChange={(isSelected) => setIsSideMenuOpen(isSelected)}
          />
        <Navbar.Content hideIn="xs" css={{ 
          jc: "flex-end",
          w: '100%'
        }}>
          {menuItems.map((item) => (
            <li className={`navBar__item ${activeMenu === item.link ? 'active' : ''}`} key={item.name} onClick={() => setActiveMenu(item.link)}>
              <Link className='navBar__link' to={item.link}>{item.name}</Link>
            </li>
					))}
        </Navbar.Content>
        <Navbar.Collapse className='collapse__menu'>
        {menuItems.map((item) => (
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