import React, {useContext} from 'react';
import {CartContext} from "../../contexts/CartContext"
import ProductCart from "./ProductCart"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Cart = () => {
const { 
     cart,
     quantifiedCart,
     setShowCart,
     totalCart
} = useContext(CartContext);
const navigation = useNavigate()
const closeCart = () => {
    setShowCart(false)
}
const checkout = () => {
  const CartOrders = {
    orders : [...quantifiedCart],
    totalPrice : totalCart
  }
  setShowCart(false)
  navigation("/checkout", {state : CartOrders})
}

return (
  <>
   <CartItems>
    <div className="header">
     <h2>Cart</h2>
      <img onClick={closeCart} alt="cart icon" src="close-icon.png"></img>
    </div>
    <hr className="separate-lign" />
    <div className="products">
     {
     !cart.length > 0 && (
        <p className="empty-products">No products in cart.</p>
     )
     }
     {
      cart.length > 0 && (
       quantifiedCart.map((cartItem,index) => {
         return <ProductCart key={index} cartItem={cartItem} />
       })
      )
     }
    </div>
    <div className="action">
      <button 
        className={totalCart <= 0 ? 'disabled' : ''} 
        disabled={totalCart <= 0 ? true : false} 
      onClick={checkout}>Checkout</button>
      <div className="summary">
        {
          cart.length > 0 && (
            <>
                <p className="title">Summary</p>
                <span className="sep-align"></span>
                <div className="details">
                    {quantifiedCart.map((item) => {
                      return (
                        <div key={item._id}>
                          <span>#{item._id}: </span>
                          <span>{item.price} x {item.quantity}qty</span>
                          <span> =  ${(item.price.substring(1) * item.quantity).toFixed(2)} </span>

                        </div>
                      ) 
                    })}
                </div>
                <span className="sep-align"></span>
            </>
          )
        }
         <div  className="totalCart">Total: ${totalCart}</div>
      </div>
    </div>
   </CartItems>
  </>
 );
};

const CartItems  = styled.div`
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
  h2 {
     font-weight: bold;
  }
  img {
     width: 37px;
     &:hover{
       cursor: pointer;
     }
  }
}
 .disabled {
   opacity: 0.2;
    &:hover {
     cursor:not-allowed !important;
     opacity: 0.2!important;
    }
 }
.products {
   padding-top: 3vh;
}p.title {
    font-weight: bold;
    text-align: right;
}
p.empty-products {
    text-align: center;
    padding: 30px;
}
.summary {
    text-align: left;
    font-size: 13px;
    color: #736e6e;
    font-weight: lighter!important;
    line-height: 1.3;
}span.title {
    color: black;
    font-weight: bold;
    display: block;
}
.sep-align {
    background: #000000;
    height: 1px;
    width: 100%;
    margin: 8px auto;
    display: block;
}
.totalCart {
    float: right;
    font-weight: bold;
    color: black;
    padding: 10px 0px;
}
.checkout-action{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
  }

}.action {
    text-align: center;
     padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    gap: 0px 10px;
  button {
    padding: 5px;
    border: 1px solid #45a29e;
    color: #45a29e;
    align-self: self-end;
    background: #ffffff;
    border-radius: 3px;
     &:hover {
     cursor:pointer;
     color: #ffffff;
     background-color:#45a29e;
    }
}

p.empty-products {
    padding: 7vh 4vw;
}


`
export default Cart;