import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {CartContext} from "../../contexts/CartContext"

const CheckOutProduct = ({cartItem})=>{
    const { 
        cart,
        setCart,
        quantifiedCart,
        setQuantifiedCart,
        totalCart
   } = React.useContext(CartContext);
   const navigation = useNavigate()
   const [confirmBtn,setConfirmBtn] = React.useState(false)
//truncate large product names
    let productName = [""];
if (cartItem["name"].length>60) {
    productName = cartItem["name"].substring(0,60) + "...";
} else {
    productName = cartItem["name"]
}

//remove item
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

  const checkout = () => {
    const CartOrders = {
      orders : [...quantifiedCart],
      totalPrice : totalCart
    }
    navigation("/checkout", {state : CartOrders})
  }

  const handleClick = (id) =>{
      removeInCart(id)
      checkout()
      setConfirmBtn("True")
  }
 return(
     <CardWrapper>
     <ProductImage src={cartItem["imageSrc"]} ></ProductImage>
     <ProductName >{productName}</ProductName>
     <ProductPrice>{cartItem["price"]}</ProductPrice>
     <ProductQuantity>{`Quantity:${cartItem["quantity"]}`}</ProductQuantity>
     {confirmBtn === "True" ? 
     <RemoveButton onClick={() => handleClick(cartItem["_id"])} >confirm</RemoveButton>:
     <RemoveButton onClick={() => handleClick(cartItem["_id"])} >remove</RemoveButton>
     }
     </CardWrapper>
 )

}
const CardWrapper =styled.div`
text-decoration: none;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:2%;
height:300px;
width:200px;
border: 3px solid var(--color-cadetblue);
border-radius:12px;
`;
const ProductImage = styled.img`
width:100px;
height:100px;
padding-bottom:10px;
`;
const ProductName = styled.p`
width:100px;
height:60px;
font-size: 10px;
margin-bottom:10px;
text-align:center;
`;

const ProductPrice = styled.p`
width:100px;
height:20px;
font-size: 10px;
margin-bottom:10px;
text-align:center;
`;
const ProductQuantity = styled.p`
width:100px;
height:20px;
font-size: 10px;
margin-bottom:10px;
text-align:center;
`;

const RemoveButton = styled.button`
border: 1px solid red;
background:transparent;
color:red;
padding:3px 5px;

&:hover{
    background:red;
    color:white;
    cursor: pointer;
}
`


export default CheckOutProduct