

// this function go through all items in the cart and remove duplicates by adding quantity property with count value
export const  QuantifyOrders = (arr) => {
  const res = {};
  arr.forEach((obj) => {
    const key = `${obj.Country}${obj["_id"]}`;
    if (!res[key]) {
      res[key] = { ...obj, quantity: 0 };
    };
    res[key].quantity += 1;
  });
  return Object.values(res);
};

export const TotalOrders = (shoppingCart) => {
return shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.quantity * currentValue.price.substring(1);
}, 0);
};
export const CountInCart = (QuantifiedArray) => {
const total =  QuantifiedArray.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.quantity;
}, 0);
return total
};

