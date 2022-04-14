import React from 'react';
import styled from "styled-components";

const ThankYou = () => {
 return (
  <Main>
    <TitleWrap>
      <Title>Thank you<br />for your order!</Title>
    </TitleWrap>
    <CtaWrap>
      <a href="/"><CtaHome>Go to Homepage</CtaHome></a>
      <a href="/products"><CtaProducts>Continue shopping</CtaProducts></a>
    </CtaWrap>
  </Main>
 );
};

export default ThankYou;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 37px);
  background-image: url("background-wallpaper.jpg");
  background-size: cover;
  padding-top: 100px;
  @media (max-width: 768px){
    padding: 0px;
    min-height: calc(100vh - 68px);
  };
`

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Title = styled.h1`
  font-size: 60px;
  text-shadow: var(--color-aquamarine) 1px 1px;
  color: var(--color-cadetblue);
  @media (max-width: 768px){
    font-size: 36px;
  }
`;

const CtaWrap = styled.div`
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    margin-bottom: -100px;;
  }`;

const CtaHome = styled.button`
  margin: 50px 20px;
  width: 150px; 
  background-color: var(--color-aquamarine);
  border: none;
  padding: 10px;
  border-radius: 10px;
  opacity: 80%;
  &:hover{
    cursor: pointer;
    opacity: 100%;
    transform: scale(1.1);
    transition:0.5s ease-in-out;
  }
  @media (max-width: 768px){
    margin: 30px auto;
  }
`

const CtaProducts = styled.button`
  width: 150px; 
  margin: 50px 20px;
  background-color: var(--color-aquamarine);
  border: none;
  padding: 10px;
  border-radius: 10px;
  opacity: 80%;
  &:hover{
    cursor: pointer;
    opacity: 100%;
    transform: scale(1.1);
    transition:0.5s ease-in-out;
  }
  @media (max-width: 768px){
    margin: 0px auto 50px;
  }
`



