import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Menu = ({open}) => {
  return (
    <MenuWrapper open={open}>
      <li>
        <StyledNavLink to='/'>Homepage</StyledNavLink>
      </li>
      <li>
      <StyledNavLink to='/products'>Shop</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/about'>About</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/login'>Login</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/checkout'>
          <CartIcon alt="cart icon" src="shopping-cart.png"></CartIcon>
          <CartText>Cart</CartText>
        </StyledNavLink>
      </li>
    </MenuWrapper>
  )
}

export default Menu;

const CartIcon = styled.img`
  width:20px;

  @media(max-width: 768px){
    display: none;
  }
`

const CartText = styled.div`
  @media(min-width: 768px){
    display: none;
  }
`

const MenuWrapper = styled.ul`
   display: flex;
   flex-flow: row nowrap;
   list-style: none;
    z-index: 20;
   li{
    padding: 18px 20px;
   }

   @media(max-width: 768px){
    flex-flow: column nowrap;
    background-color: var(--color-black);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    list-style: none;
    padding-top: 3.5rem;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
   }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-cadetblue);

  &.active{
    text-decoration: underline;
    color: var(--color-aquamarine);
  }

  @media(max-width: 768px){
    color: var(--color-cadetblue);
    font-size: 26px;
  }
`
