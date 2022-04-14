import React from 'react';
import styled from "styled-components";
const ErrorPage = () => {
 return (
  <ErrorWrapper>
      <p>Some error occurred. Please try again later !</p>
  </ErrorWrapper>
 );
};


const ErrorWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height:100vh;
`
export default ErrorPage;