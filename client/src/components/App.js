import React from 'react';
import { Route, Routes} from 'react-router-dom';
import GlobalStyle from '../Common/GlobalStyle'
import styled from "styled-components";
import {
Homepage,
 About,
 Checkout,
 Product,
 Products
} from './pages'
import Header from './Header/Header'

const App = () => {
return (
  <>
    <GlobalStyle/>
    <AppWrapper>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/product/:prodId" element={<Product/>}/>
          <Route path="/products" element={<Products/>} />
        </Routes>
    </AppWrapper>
  </>

  );
};

const AppWrapper = styled.div`
  
`


export default App;
