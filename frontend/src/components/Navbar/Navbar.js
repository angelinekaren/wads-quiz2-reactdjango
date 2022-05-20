import { React, useState } from "react";

import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLink,
  NavTitleWrapper,
  NavHeading,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
        <NavContainer>
          <NavTitleWrapper>
            <NavHeading>VK</NavHeading>
          </NavTitleWrapper>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/post">Post</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
  //   return <h1>hai</h1>;
};

export default Navbar;
