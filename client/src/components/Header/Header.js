import React from 'react';
import styled from "styled-components";
import {NavLink } from "react-router-dom";
const Header = () => {
 return (
  // please integrate NavLink from react-router-dom v6
  <Nav>
     <NavLink to='/' >Homepage</NavLink>
     <NavLink to='/Products' >Shop</NavLink>
     <NavLink to='/about' >About</NavLink>
  </Nav>
 );
};


const Nav = styled.div`

`

export default Header;