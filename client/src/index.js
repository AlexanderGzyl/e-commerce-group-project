import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter} from 'react-router-dom';
import {AppContextProvider} from './contexts/AppContext'
import {CartContextProvider} from './contexts/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
         <App />
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
