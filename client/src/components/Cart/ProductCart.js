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

// add item
const addItem = (id) => {
  let currentItem =  quantifiedCart.find(
   currentitem => currentitem._id === id
  )
  if(currentItem.numInStock > currentItem.quantity) {
   setOutOfStock(false)
   currentItem.quantity += 1
   if(currentItem.quantity > 1){
    setDisableBtn(false)
   }
   setQuantifiedCart([...quantifiedCart])
   setCart([...cart,currentItem])
  }else{
   setOutOfStock(true)
  }
}

// remove item
const removeItem = (id) => {
  let currentItem =  quantifiedCart.find(
   currentitem => currentitem._id === id
  )
  if(currentItem.quantity > 1) {
   setDisableBtn(false)
   currentItem.quantity -= 1
   if(currentItem.numInStock > currentItem.quantity){
    setOutOfStock(false)
   }
   setQuantifiedCart([...quantifiedCart])

   const newCart =  cart.filter(
    item => item._id !== id
   )
   const cartCount = []
   for(let i = 0; i < currentItem.quantity; i++){
     const cartItem = {
      body_location: currentItem.body_location,
      category: currentItem.category,
      companyId: currentItem.companyId,
      imageSrc: currentItem.imageSrc,
      name: currentItem.name,
      numInStock: currentItem.numInStock,
      price: currentItem.price,
      _id: currentItem._id
     }
      cartCount.push(cartItem)
   }
   setCart([...newCart, ...cartCount])
  }else{
   setDisableBtn(true)
  }
 
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
         <span>
           <span className="times">X</span>
           {cartItem.quantity}
           </span>
         <button 
         onClick={() => addItem(cartItem._id)} 
         className={outOfStock ? 'add disabled' : 'add'}
         >+</button>
         <button 
         onClick={() => removeItem(cartItem._id)} 
         className={disableBtn ? 'minus disabled' : 'minus'}
         >-</button>
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
    background: #ffffff;
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