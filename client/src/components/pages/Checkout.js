import React from 'react';
import { useLocation } from 'react-router-dom';
const Checkout = () => {
 let location = useLocation();
 const checkoutData = location.state
 const myJSON = JSON.stringify(checkoutData);
 var jsonPretty = JSON.stringify(JSON.parse(myJSON),null,2); 
 return (
  <div>
   {jsonPretty}
  </div>
 );
};

export default Checkout;