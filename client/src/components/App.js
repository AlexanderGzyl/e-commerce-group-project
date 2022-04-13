import React from 'react';
import { Route, Routes} from 'react-router-dom';
import GlobalStyle from '../Common/GlobalStyle'
import styled from "styled-components";
import {
Homepage,
 Checkout,
 Product
} from './pages'
import Products from './pages/ProductsPage/Products'
import Header from './Header/Header'
import Companies from './pages/Companies';
import Footer from './Footer/Footer';

const App = () => {
return (
  <>
    <GlobalStyle/>
    <AppWrapper>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/companies" element={<Companies/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/product/:prodId" element={<Product/>}/>
          <Route path="/products" element={<Products/>} />
        </Routes>
        <Footer/>
    </AppWrapper>
  </>

  );
};

const AppWrapper = styled.div`
  
`


export default App;
