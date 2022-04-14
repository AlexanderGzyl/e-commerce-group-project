import React, {useContext, useState} from 'react';
import styled from "styled-components";
import {CartContext} from "../../contexts/CartContext"

const ProductCart = ({cartItem}) => {
const [disableBtn,setDisableBtn] = useState(false)
const { 
     cart,
     setCart,
     quantifiedCart,
     setQuantifiedCart,
     outOfStock,
     setOutOfStock
} = useContext(CartContext);

// select quantity
const quantitySelected = (id,e) => {
  e.preventDefault();
  let currentItem =  quantifiedCart.find(
   currentitem => currentitem._id === id
  )
  const newQuantifiedCart =quantifiedCart.filter(
   currentitem => currentitem._id !== id
  )
   currentItem.quantity = e.target.value
   setQuantifiedCart([...newQuantifiedCart,currentItem])
}


const removeInCart = id => {
  const newCart =  cart.filter(
   currentitem => currentitem._id !== id
  )
  const newQuantifiedCart =quantifiedCart.filter(
   currentitem => currentitem._id !== id
  )
  setCart([...newCart])
  setQuantifiedCart([...newQuantifiedCart])
}

 return (
  <CartWrapper key={cartItem._id}>
     <>
     <div className="info-container">
       <img src={cartItem.imageSrc} alt={cartItem.name} />
       <p>{cartItem.name}</p>
     </div>
     <div className="outOfStock">
      {
       outOfStock && (
         <p>We only have {cartItem.numInStock} left</p>
       )
      }
     </div>
     <div className="action-container">
       <div className="price">
        {cartItem.price} 
       </div>
       <div className="quantity">
            <select className="select-form" defaultValue="default" name="flight" id="selectQuantity" onChange={(e) => quantitySelected(cartItem._id,e)}>
                <option value="default" disabled >{cartItem.quantity}</option>
                  {Array.from({ length: cartItem.numInStock }, (_, i) => i + 1).map(count => 
                      <option className="options" key={count} value={count}  >{count}</option>
                  )}
           </select>
       </div>
       <button onClick={() =>removeInCart(cartItem._id)}className="remove">
        remove
       </button>
     </div>
     <span className="lineSeparator remove"></span>
     </>
  </CartWrapper>
 );
};
const CartWrapper = styled.div`
.info-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 0px 10px;
        background: white;
    border-radius: 10px;
    padding: 10px;
}
select#selectQuantity {
    border-radius: 7px;
    border: none;
    background: #45a29e;
    padding: 3px 4px;
}
.info-container img {
    width: 65px;
}

.info-container p {
    width: 15vw;
    word-wrap: break-word;
    font-size: 11px;
}
span.times {
    font-size: 19px;
    text-transform: lowercase;
    padding: 0px 2px;
    color: #45a29e;
    display: inline-block;
}

.quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px 5px;
    padding: 0px 3px;
    border-radius: 3px;
}

.outOfStock p {
    color: red;
    font-size: 11px;
    font-weight: lighter;
    text-align: center;
    padding-top: 2px;
    font-style: italic;
}
.action-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 9px;
}
span.lineSeparator {
    background: #45a29e;
    height: 1px;
    width: 95%;
    margin: 8px auto;
    display: block;
}
button.add {
    padding: 0px 5px;
    background: #45a29e;
    margin: 0px 2px;
    width: 24px;
    text-align: center;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    border: none;
   }
 .disabled {
   opacity: 0.2;
    &:hover {
     cursor:not-allowed;
     opacity: 0.2;
    }
 }
button.minus {
    padding: 0px 5px;
    background: #45a29e;
    margin: 0px 2px;
    width: 24px;
    text-align: center;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    border: none;
}
button.remove {
    border: 1px solid red;
    padding: 2px 5px;
    border-radius: 2px;
    color: red;
    font-weight: lighter;
     &:hover {
     cursor: pointer;
     color: #ffff;
     background:red
    }
}

`
export default ProductCart;