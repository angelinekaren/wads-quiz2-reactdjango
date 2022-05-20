import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 100px;
  z-index: 1000;
  background: #f7f5f5;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: flex-end;
  width: 100vw;
  white-space: nowrap;
`;

export const NavItem = styled.li`
  margin-top: 10px;
  height: 80px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: black;
  height: 100%;
  font-weight: bold;
  padding: 0 1.3rem;
  border-bottom: 3px solid transparent;
  font-size: 20px;
  &.active {
    border-bottom: 3px solid #2bc66a;
  }
  &:hover {
    border-bottom: 3px solid #2bc66a;
  }
`;

export const NavTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
`;

export const NavHeading = styled.h1`
  font-size: 35px;
  color: #2bc66a;
`;
