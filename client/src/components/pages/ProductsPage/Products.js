import React, { useEffect, useState } from "react"
import styled from "styled-components";
import {AiFillShopping} from "react-icons/ai"
import Card from "./Card"
//confirm react icons version before commit
//confirm change to products model

const Products = () => {
    const [products, setProducts] = useState([])
    //on mount query the products and store them in state
    useEffect(() => {
        fetch(`/products`)
            .then((res) => res.json())
            .then((json) => {
            setProducts(json.data);
            });
    }, []);

return (
<>
    <Title>
    Products Page<AiFillShopping style={{color: "#45A29E", fontSize: "26px", marginLeft:"10px"}}/>
    </Title>
    <Cards>
    {products.map((product)=>{
    return <Card key ={product["_id"]} product = {product}></Card>
    })}
    </Cards>
</>
);
};


const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 26px;
    margin-top: 70px;
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
align-items:center;
justify-content: center;

`;

export default Products;