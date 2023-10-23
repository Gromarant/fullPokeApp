import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const NavBar = () => {  

  const collapseItems = [
    {
      name: "Memory Game",
      link: "/",
    },
    {
      name: "Create Pokémon",
      link: "/create",
    },
    {
      name: "Search",
      link: "/search",
    },
  ];

  return (
    <>
      <Navbar>
         <Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Brand>
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
          <Navbar.CollapseItem key={item.name}>
            <Link to={item.link}>{item.name}</Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  </>
  );
};

export default NavBar;