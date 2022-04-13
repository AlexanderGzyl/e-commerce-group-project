import React from 'react';
import styled from "styled-components";


const Footer = () => {
 return (
   <FooterDiv>
      Copyright 2022 <span>Alexander&nbsp;Gzyl,&nbsp;Jed&nbsp;Bonheur,&nbsp;Olga&nbsp;Perepichka,&nbsp;Ali&nbsp;Mazaheri.</span> All&nbsp;Rights&nbsp;Reserved.
   </FooterDiv>
 );
};

export default Footer;


const FooterDiv = styled.div`
padding: 10px;
border-top: 2px solid #f1f1f1;
background-color: var(--color-black);
color: var(--color-lightgray);
font-style: italic;
font-size: 11px;
text-align: center;


span{
  padding: 0 10px;
}
`