import React, {useContext} from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import GlobalStyle from '../Common/GlobalStyle'
import styled from "styled-components";
import {AppContext} from "../contexts/AppContext"
import {
Homepage,
 Checkout,
 Product
} from './pages'
import Products from './pages/ProductsPage/Products'
import Header from './Header/Header'
import Companies from './pages/Companies';
import Footer from './Footer/Footer';
import ErrorPage from './error/error'
import ThankYou from './pages/ThankYouPage';
import Login from  '../components/pages/Login'
import Admin from  '../components/pages/Admin'
import SignUp from  '../components/pages/SignUp'

const App = () => {
  const location = useLocation();
  const pathUrl = location.pathname
  const {auth} = useContext(AppContext)
  if(pathUrl === '/admin' && !auth) {
      return <Navigate to="/login" replace />
  }
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
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/error-page" element={<ErrorPage/>} />
          <Route path="/thank-you" element={<ThankYou/>} />
          {
            pathUrl === '/admin' && (
              <>
              <Route path="/admin" element={<Admin/>} />
              </>
          )
          }
        </Routes>
        <Footer/>
    </AppWrapper>
  </>

  );
};

const AppWrapper = styled.div`
  
`


export default App;
