import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckOutForm from './CheckOutForm'
import CheckOutProduct from './CheckOutProduct'
import styled from 'styled-components';




const Checkout = () => {
 let location = useLocation();
 const checkoutData = location.state
 console.log(checkoutData)
//pass the order data from checkout data to checkoutproduct component
 return (
     <>
<Wrapper>
<CheckOutProducts>
{checkoutData["orders"].map((order)=>{
    console.log(order["_id"])
    return <CheckOutProduct key ={order["_id"]} cartItem={order}></CheckOutProduct>
    })}
    </CheckOutProducts>
    <TotalPrice>{`Total Price: ${checkoutData["totalPrice"]}`}</TotalPrice>
    <CheckOutForm checkoutData={checkoutData}></CheckOutForm>
</Wrapper>
  </>
 );
};

const Wrapper = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction:column;
  align-items:center;
  padding-top: 100px;
`;

const CheckOutProducts = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-wrap: wrap;
width:80vw;
`;

const TotalPrice = styled.div`
margin:20px;
border: 3px solid red;
padding:3px 5px;
font-weight:bold;

`;

export default Checkout;