import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
import {CartContext} from "../../../contexts/CartContext"

//current Bug: user cannot highlight 
//product name with their mouse because it is in a link
//a solution would be to use useNavigate instead

const Card = ({product}) =>{
    const { cart, setCart } = React.useContext(CartContext);
    //Card states
    //is the product in stock?Toggle Cart button depending on answer
    const [isInStock, setisInStock] = React.useState('False')
    //check if the product is in stock
    React.useEffect(() => {
        if (Number(product["numInStock"])>0) {
            setisInStock("True")
        }
    }, [product]);
        
    

//link go to product page "/product/:prodId"
const productID = product["_id"]


//Handlers
//onclick push product to cart and prevent propagation
function handleBubble(event) {
    event.stopPropagation();
    event.preventDefault()
}

function handleAddToCart() {
    setCart([...cart, product]);
}

function handleClick(event) {
    handleAddToCart();
    handleBubble(event);
    
}



    return(<CardWrapper to='/about'>
        <ProductImage src={product["imageSrc"]} ></ProductImage>
        <ProductName >{product["name"]}</ProductName>
        <ProductPrice  onClick={handleBubble}>{product["price"]}</ProductPrice>
        {isInStock === "True" ? 
        <Button onClick={ handleClick}>Add to Cart</Button>
        :<Button disabled onClick={handleBubble}>Out of Stock</Button>}
    </CardWrapper>)
};

const CardWrapper =styled(Link)`
text-decoration: none;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:2%;
height:300px;
width:200px;
box-shadow: 4px 4px 10px 4px #888888;
border: 5px solid none;
border-radius:12px;
transition: transform .2s;
:hover {
    transform: scale(1.1); 
`;
const ProductImage = styled.img`
width:100px;
height:100px;
padding-bottom:10px;
`;
const ProductName = styled.p`
width:100px;
height:40px;
font-size: 10px;
margin-bottom:10px;
text-align:center;
`;

const ProductPrice = styled.div`
height:40px;
font-size: 20px;
padding-bottom:10px;
padding-top:10px;
text-align:center;
`;

const Button = styled.button`
background: var(--color-cadetblue);
font-size: 20px;
padding-bottom:10px;
border-radius:12px;
text-align:center;
border: none;
padding: 10px;
:hover{
    background:var(--color-aquamarine);
}
&:disabled {
    cursor: not-allowed;
    opacity: 50%;
    :hover{
        background: var(--color-cadetblue);
}
}
`;



export default Card