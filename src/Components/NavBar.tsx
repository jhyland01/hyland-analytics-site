import { Container, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const navItems = {
  about: {
    title: "Portfolio",
    url: "/",
  },
  drips: {
    title: "page2",
    url: "/page2",
  },
  portfolio: {
    title: "page3",
    url: "/page3",
  },
  details: {
    title: "page4",
    url: "/page4",
  },
};

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <Container maxWidth="md">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        {Object.keys(navItems).map((page) => (
          <Stack key={navItems[page].title} alignItems="center">
            <Link
              to={navItems[page].url}
              className={pathname === navItems[page].url ? "selected" : ""}
            >
              {navItems[page].title}
            </Link>
            {pathname === navItems[page].url}
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default NavBar;
