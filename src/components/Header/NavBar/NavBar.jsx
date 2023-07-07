import { Link } from 'react-router-dom';


const NavBar = () => {  
  return (
    <nav>
      <ul className='navBar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/new'>Add New</Link></li>
        <li><Link to='/search'>Search</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;