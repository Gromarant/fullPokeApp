import { Navbar, Link } from "@nextui-org/react";

const NavBar = () => {  

  const collapseItems = [
    "Home",
    "Add New",
    "Search",
  ];

  return (
    <>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link isActive href="/new">Add New</Navbar.Link>
          <Navbar.Link href="/search">Search</Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, link) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  </>
  );
};

export default NavBar;