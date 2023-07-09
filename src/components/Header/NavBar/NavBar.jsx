import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const NavBar = () => {  

  const collapseItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Add New",
      link: "/new",
    },
    {
      name: "Search",
      link: "/search",
    },
  ];

  return (
    <>
      <Navbar isBordered variant="sticky">
         <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link  to="/new">Add New</Link>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item.name}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              to={item.link}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  </>
  );
};

export default NavBar;