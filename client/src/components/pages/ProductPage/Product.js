import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
import Card from "../ProductsPage/Card";
import { CartContext } from "../../../contexts/CartContext";

const Product = () => {
  //retrieve parameters
  const { prodId } = useParams();
  // state defined for data error
  const [error, setError] = useState(false);
  // state defined for product data
  const [product, setProduct] = useState([]);
  // state defined for data status
  const [dataStatus, setDataStatus] = useState("");
  // purchased product quantity
  const [productQuantity, setProductQuantity] = useState(1);
  //add to cart
  const { cart, setCart } = useContext(CartContext);

  //handle functions
  // incerase quantity function
  const [isAvailable, setIsAvailable] = useState(true);
  const handleIncrement = () => {
    if (productQuantity <= product.numInStock - 1) {
      setProductQuantity(productQuantity + 1);
    }
    if (productQuantity == product.numInStock) {
      setIsAvailable(false);
    }
  };

  // decrease quantity function
  const handleDecrement = () => {
    if (productQuantity > 1) {
      if (productQuantity <= product.numInStock) setIsAvailable(true);
      setProductQuantity(productQuantity - 1);
    }
  };
  // function to handle quantity change
  const handleChange = (e) => {
    let input = parseInt(e.target.value);
    if (input <= product.numInStock) {
      setProductQuantity(input);
      setIsAvailable(true);
    } else {
      setProductQuantity(product.numInStock);
      setIsAvailable(false);
    }
  };
  const handleAddtoCart = () => {
    setCart(product);
  };

  //reade data from server
  // load data from server by using id
  useEffect(() => {
    fetch(`/product/${prodId}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw Error("Server Error");
        }
        return res.json();
      })

      .then((res) => {
        setDataStatus("idle");
        setProduct(res.data);
      });

    return () => {
      setDataStatus("loading");
    };
  }, [setProduct, setDataStatus, setError, prodId]);

  const [products, setProducts] = useState([]);
  //on mount query the products and store them in state
  useEffect(() => {
    fetch(`/products`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.data);
      });
  }, []);

  //render
  return (
    <>
      {!error ? (
        <ProductWrapper>
          {dataStatus === "idle" ? (
            <>
              <div className="product-details">
                <ProductImageWrapper>
                  <Image src={product.imageSrc} alt={product.name} />
                </ProductImageWrapper>
                <InfoWrapper className="infowrapper">
                  <ProductName>{product.name}</ProductName>

                  <ProductCompany>
                    <span style={{ color: "gray" }}>Sold By: </span>
                    {product.companyId}
                  </ProductCompany>

                  {product.numInStock > 0 ? (
                    <ProductPrice>{product.price}</ProductPrice>
                  ) : (
                    <ProductPrice>
                      <s>{product.price}</s>
                      <Span> Item not available</Span>
                    </ProductPrice>
                  )}

                  <ProductQuantityText>Quantity:</ProductQuantityText>

                  <ProductQuantity>
                    <div className="component-quantity-input">
                      <QuantityButtonMinus onClick={handleDecrement}>
                        -
                      </QuantityButtonMinus>
                      <QuantityField
                        type="text"
                        value={productQuantity}
                        onChange={handleChange}
                      />
                      <QuantityButtonPlus onClick={handleIncrement}>
                        +
                      </QuantityButtonPlus>
                      {!isAvailable ? (
                        <Span> We have only {product.numInStock} left!</Span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </ProductQuantity>
                  <ProductAddButton>
                    <AddtoCartButton onClick={handleAddtoCart} disabled={false}>
                      Add to Cart
                    </AddtoCartButton>
                  </ProductAddButton>
                </InfoWrapper>
              </div>

              <div className="related-items">
                <ProductRelatedTitle>Related Items:</ProductRelatedTitle>
                <ProductRelatedItemWrapper>
                  {products.map((element) => {
                    if (
                      product.Lifestyle == element.Lifestyle &&
                      product._id != element._id
                    ) {
                      return (
                        <Card key={element["_id"]} product={element}></Card>
                      );
                    }
                  })}
                </ProductRelatedItemWrapper>
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </ProductWrapper>
      ) : (
        <h1>Error in loading data!</h1>
      )}
    </>
  );
};
const ProductWrapper = styled.div`
  padding: 20px;
  background-color: whitesmoke;

  .product-details {
    display: flex;
    flex-direction: row;
    padding:0
    gap: 5px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
     
    }
  }

  .related-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
const Image = styled.img`
  position: relative;
  margin-right: 5px;
  width: 300px;
  height: 300px;
  padding: 5px;
`;
const ProductImageWrapper = styled.div`
  display: flex;
  width: 50%;
  background-color: whitesmoke;
  justify-content: center;
`;
const InfoWrapper = styled.ul`
  width: 50%;
  list-style-type: none;
  top: 5px;
  padding: 5px;
  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const AddtoCartButton = styled.button`
  
  background: var(--color-cadetblue);
  height: 50px;
  width: 200px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;

  :hover {
    transform: scale(1.1); 

    &:disabled {
    cursor: not-allowed;
    opacity: 50%;
    :hover{
        background: var(--color-cadetblue);
}
`;

const ProductName = styled.li`
  font-size: 28px;
  width: 75%;
`;
const ProductPrice = styled.li`
  font-size: 28px;
  padding-top: 20px;
`;
const ProductCompany = styled.li`
  font-size: 12px;
  padding-top: 20px;
`;
const ProductQuantityText = styled.li`
  font-size: 14px;
  padding-top: 20px;
`;
const ProductQuantity = styled.li`
  font-size: 12px;
  padding-top: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

const ProductAddButton = styled.li`
  padding-top: 20px;
  width: 100px;
`;
const ProductRelatedItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const ProductRelatedTitle = styled.h1`
  padding-top: 50px;
`;
const QuantityField = styled.input`
  width: 50px;
  height: 25px;
  text-align: center;
  border-radius: 0px 0px 0px 0px;
`;
const QuantityButtonPlus = styled.button`
  width: 25px;
  height: 25px;
  background: var(--color-cadetblue);
  border-radius: 0px 5px 5px 0px;
`;
const QuantityButtonMinus = styled.button`
  width: 25px;
  height: 25px;
  background: var(--color-cadetblue);
  border-radius: 5px 0px 0px 5px;
`;
const Span = styled.span`
  font-size: 12px;
  color: red;
`;
export default Product;
