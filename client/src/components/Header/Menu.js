import React, {useContext} from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Cart from '../Cart/Cart'
import {CartContext} from "../../contexts/CartContext"


const Menu = ({open}) => {
 const { 
  cart,
  showCart,
  setShowCart
} = useContext(CartContext);

  const displayCart = () => {
      setShowCart(true)
  }
  return (
    <>
    <MenuWrapper open={open}>
      <li>
        <StyledNavLink to='/'>Homepage</StyledNavLink>
      </li>
      <li>
      <StyledNavLink to='/products'>Shop</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/companies'>Our partners</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/login'>Login</StyledNavLink>
      </li>
      <li className="hide-mobile">
        <div onClick={displayCart} className="cart-wrapper">
          <CartIcon alt="cart icon" src="/shopping-cart.png"></CartIcon>
          <div className="cartCount">{cart.length}</div>
        </div>
      </li>
    </MenuWrapper>
    {
      showCart && (
      <CartWrapper>
        <Cart/>
      </CartWrapper>
      )
    }
    </>
  )
}

export default Menu;

const CartWrapper = styled.div`
    background: #ededed;
    position: fixed;
    right: 10px;
    overflow-y: auto;
    height: 100%;
    z-index: 999;
    top: 0;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0px 0px 4px 1px #0000005c;
    &::-webkit-scrollbar {
    background: #45a29e;
   }
   &::-webkit-scrollbar-thumb {
    background: #949494;
  }
    @media(min-width: 768px){
    display: none;
  }


  
`
const CartIcon = styled.img`
  width:20px;

  @media(max-width: 768px){
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

   .cart-wrapper {
    position: relative;
    &:hover{
      cursor: pointer;
    }
}

.cartCount {
position: absolute;
    color: #ffffff;
    padding: 13px;
    top: -15px;
    right: -19px;
    border-radius: 50%;
    background: #45a29e;
    width: 25px;
    height: 25px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 768px){
      position: absolute;
      top: 8px;
      right: 165px;
    }
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
    .hide-mobile{
      display:none;
    }
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
