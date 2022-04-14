import React from "react";
import styled, { keyframes } from "styled-components";
import { FiLoader } from "react-icons/fi";

const Spinner = () => {
  return (
    <Wrapper>
      <SpinIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spin = keyframes`
from{
  transform: rotate(0deg)
}to{
  transform: rotate(360deg)
}`;

const SpinIcon = styled(FiLoader)`
  animation: ${Spin} 2000ms linear infinite;
  width: 25px;
  height: 25px;
`;

export default Spinner;
