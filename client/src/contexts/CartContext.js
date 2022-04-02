//  this cart context wrapping our app, it will help us to manage checkouts and adding to cart
// it will available everywhere on the app

import React, {useState} from "react";
export const CartContext = React.createContext(null);

export const CartContextProvider = ({ children }) => {

// initialize useState with empty array when you want to map the data you are expecting to avoint unnecessary undefined
 const[cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{
     cart,
     setCart
    }}>
      {children}
    </CartContext.Provider>
  );
}