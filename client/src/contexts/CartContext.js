//  this cart context wrapping our app, it will help us to manage checkouts and adding to cart
// it will available everywhere on the app

import React, {useState,useEffect} from "react";
import {QuantifyOrders,TotalOrders} from "../HelperFunctions"
export const CartContext = React.createContext(null);

export const CartContextProvider = ({ children }) => {

// initialize useState with empty array when you want to map the data you are expecting to avoint unnecessary undefined
 const[cart, setCart] = useState([])
 const[quantifiedCart, setQuantifiedCart] = useState([])
const[showCart, setShowCart] = useState(false)
const[totalCart, setTotalCart] = useState(false)
const[outOfStock,setOutOfStock] = useState(false)
useEffect(() => {
  setQuantifiedCart(QuantifyOrders(cart))
}, [cart]);
useEffect(() => {
  setTotalCart(TotalOrders(quantifiedCart).toFixed(2))
}, [quantifiedCart]);
  return (
    <CartContext.Provider value={{
     cart,
     totalCart,
     quantifiedCart,
     setCart,
     showCart,
     setQuantifiedCart,
     setShowCart,
     outOfStock,
     setOutOfStock
    }}>
      {children}
    </CartContext.Provider>
  );
}