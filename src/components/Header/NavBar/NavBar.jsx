import { Navbar, Link } from "@nextui-org/react";

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
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/new">Add New</Navbar.Link>
          <Navbar.Link href="/search">Search</Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item.name}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.link}
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