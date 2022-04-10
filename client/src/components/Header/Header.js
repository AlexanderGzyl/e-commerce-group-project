import React from 'react';
import styled from "styled-components";
import Burger from './Burger';
import { NavLink } from "react-router-dom";

const Header = () => {
 return (
   <Nav>
      <LogoDiv to='/'>
         <Logo alt="logo image" src="Logo.png"></Logo>
      </LogoDiv>
     <Burger />
   </Nav>
 );
};

export default Header;


const Nav = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 55px;
   border-bottom: 2px solid #f1f1f1;
   padding: 0 20px;
   background-color: var(--color-black);
   position: fixed;
   z-index: 40;
   top: 0;
    }
`

const LogoDiv = styled(NavLink)`
   padding: 10px;

   @media (max-width: 768px){
      padding: 10px 0px;
   }
`;

const Logo = styled.img`
   height: 30px;
`