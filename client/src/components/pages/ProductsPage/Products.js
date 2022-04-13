import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components";
import Card from "./Card"
import Pagination from "./Pagination"


const Products = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    
    //on mount query the products and store them in state
    useEffect(() => {
        fetch(`/products?page=${currentPage}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`Error! status: ${res.status}`);
          }
        })

        .then((data) => {
            setProducts(data.data);
        });
    }, [currentPage]);
    

return (
<>
    <AnimateTitle>
    BROWSE PRODUCTS
    </AnimateTitle>
    <Cards>
    {products.map((product)=>{
    return <Card key ={product["_id"]} product = {product}></Card>
    })}
    </Cards>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
</>
);
};




const Title = styled.div`

padding-bottom:2%;
text-transform: uppercase;
  background-image: linear-gradient(
    45deg,
    #66fcf1 0%,
    #03635d 33%
  );
  display: flex;
  justify-content: center;
  text-align:center;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 36px;
`;
const textclip = keyframes`
to {
    background-position: 200% center;
  }
`
const AnimateTitle = styled(Title)`
    animation: ${textclip} 2s linear 2;
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
align-items:center;
justify-content: center;
`;

export default Products;