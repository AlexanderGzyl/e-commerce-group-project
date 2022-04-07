import React from 'react';
import styled from "styled-components";

const Homepage = () => {
 return (
  <Main>
    <TextImage>
      <HomeImageWrap>
        <HomepageImage alt="homepage image" src="home-image.png"></HomepageImage>
      </HomeImageWrap>
      <TitleWrap>
        <Title>THE BEST PRICE,<br />THE BEST GADGET.</Title>
        <Uppertitle>Fill your basket with our offer.</Uppertitle>
      </TitleWrap>
    </TextImage>
    <CtaWrap>
      <a href="/products"><CtaShopNow>Shop Now</CtaShopNow></a>
      <a href="/companies"><CtaPartners>Our partners</CtaPartners></a>
    </CtaWrap>
  </Main>
 );
};

export default Homepage;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 55px);
  background-image: url("background-wallpaper.jpg");
`

const TextImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  width: 90%;
  gap: 30px;
  

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    text-align: center;
  };
`;

const HomeImageWrap = styled.div`
  background-color: whitesmoke;
  padding: 10px;
  opacity: 80%;
  border-radius: 50px;
  border: 1px solid white;
  @media (max-width: 768px){
    margin-top: 50px;
  }
`
const HomepageImage = styled.img`
  width: 200px;
`

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 60px;
  text-shadow: var(--color-aquamarine) 1px 1px;
  color: var(--color-cadetblue);
  @media (max-width: 768px){
    font-size: 36px;
  }
`;

const Uppertitle = styled.h2`
  padding-top: 10px;
  font-size: 32px;
  color: var(--color-lightgray);
  @media (max-width: 768px){
    padding-top: 28px;
    font-size: 26px;
  }
`;

const CtaWrap = styled.div`
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }`;

const CtaShopNow = styled.button`
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

const CtaPartners = styled.button`
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



