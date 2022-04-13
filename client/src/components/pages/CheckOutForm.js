import React from 'react';
import styled from 'styled-components';

const CheckOutForm = ({})=>{
    return (
        <Wrapper>
            
          <StyledForm >
          <h2>Customer Information</h2>
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
            />
            <StyledInput
               type="text"
              name="Phone"
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
              name="Address"
              placeholder="Address"
            />
            <StyledInput
              type="text"
              name="postalcode"
              placeholder="Postal code"
            />
            <StyledInput
              type="text"
              name="Country"
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
              <Confirm type="submit">Purchase</Confirm>
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