import React, {useContext} from 'react';
import styled from "styled-components";
import Burger from './Burger';
import Cart from '../Cart/Cart'
import { NavLink } from "react-router-dom";
import {CartContext} from "../../contexts/CartContext"
const Header = () => {
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
   <Nav>
      <LogoDiv to='/'>
         <Logo alt="logo image" src="/Logo.png"></Logo>
      </LogoDiv>
      <div onClick={displayCart} className="cart-wrapper small">
          <CartIcon alt="cart icon" src="/shopping-cart.png"></CartIcon>
          <div className="cartCount">{cart.length}</div>
      </div>
     <Burger />
   </Nav>
   {
      showCart && (
      <CartWrapper>
        <Cart/>
      </CartWrapper>
      )
    }
   </>
   
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
   align-items: center;
   z-index: 40;
   top: 0;
   .cart-wrapper{
     margin-top:4px;
   }
   @media (max-width: 768px){
      padding: 0px !important;
      }
   }
   .cart-wrapper.small {
    position: relative;
    margin-top: 15px;
    margin-right: 10px;
    padding-right: 20px;
   
    
    &:hover{
      cursor: pointer;
    }
    @media (min-width: 768px){
      display: none;
    }
   }
   .cartCount {
    position: absolute;
    color: #ffffff;
    padding: 13px;
    top: -13px;
    right: -19px;
    border-radius: 50%;
    background: #45a29e;
    width: 25px;
    height: 25px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px){
      right: -1px;
      top: -16px;
   }
}
`
const CartWrapper = styled.div`
    background: #ededed;
    position: fixed;
    right: 10px;
    overflow-y: auto;
    height: 100%;
    z-index: 999;
    top:0px;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0px 0px 4px 1px #0000005c;
    &::-webkit-scrollbar {
    background: #949494;
   }
   &::-webkit-scrollbar-thumb {
     background: #45a29e;
}
`
const CartIcon = styled.img`
  width:20px;
`
const LogoDiv = styled(NavLink)`
   padding: 10px;

   @media (max-width: 768px){
      padding: 10px 0px 0px 10px;
   }
`;

const Logo = styled.img`
   height: 30px;
`