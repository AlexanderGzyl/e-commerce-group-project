import React, {useContext} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {CartContext} from "../../contexts/CartContext"


const CheckOutForm = ({checkoutData})=>{
  const { 
     setCart,
     setQuantifiedCart,
} = useContext(CartContext);
  const navigate = useNavigate()
  const sanitizeOrders = checkoutData.orders.map((order)=> {
     return {
          _id : order._id,
          name : order.name,
          price:order.price,
          imageSrc : order.imageSrc,
          body_location : order.body_location,
          companyId : order.companyId,
          category : order.category,
          quantity : order.quantity
     }
  })
  const purchase = (e) => {
    e.preventDefault()
    const payload = {
      email: e.target.email.value,
      phone: e.target.phone.value,
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      address: e.target.address.value,
      postalcode: e.target.postalcode.value,
      country: e.target.country.value,
      credit_card: e.target.credit.value,
      expiration: e.target.expiration.value,
      cvv: e.target.cvv.value,
      items: [...sanitizeOrders, ], 
      TotalPrice:checkoutData.totalPrice
    }
    fetch('/order', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    })
    .then(()=> {
      setCart([])
       setQuantifiedCart([])
       navigate('/thank-you')
    })
  }


    return (
        <Wrapper>
            
          <StyledForm onSubmit={(e) => purchase(e)}>
          <h2>Customer Information</h2>
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
            />
            <StyledInput
               type="text"
              name="phone"
              placeholder="Phone Number"
            />
            <h2>Shipping Information</h2>
            <StyledInput
              type="text"
              name="fname"
              placeholder="First Name"
            />
            <StyledInput
              type="text"
              name="lname"
              placeholder="Last Name"
            />
            <StyledInput
              type="text"
              name="address"
              placeholder="Address"
            />
            <StyledInput
              type="text"
              name="postalcode"
              placeholder="Postal code"
            />
            <StyledInput
              type="text"
              name="country"
              placeholder="Country"
            />
            <h2>Purchasing Info</h2>
            <StyledInput
               type="text"
              name="credit"
              placeholder="Credit Card Number"
            />
            <StyledInput
               type="text"
              name="expiration"
              placeholder="expiration date"
            />
            <StyledInput
              type="text"
              name="cvv"
              placeholder="CVV"
            />
              <Confirm type="submit" >Purchase</Confirm>
          </StyledForm>
        </Wrapper>
      );
};
//styles
const Wrapper = styled.div`
  display: flex;
  align-items:center;
  padding-top: 30px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 3px solid var(--color-cadetblue);
  border-radius: 10px;
  padding:20px;
`;

const StyledInput = styled.input`
  margin-top: 2px;
  margin-bottom: 2px;
  font-size:16px;
`;

const Confirm = styled.button`
  margin-top: 10px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  background-color: var(--color-cadetblue);
  border: none;
  cursor: pointer;
  padding: 5px 0px;
  border-radius: 10px;
`;



export default CheckOutForm;