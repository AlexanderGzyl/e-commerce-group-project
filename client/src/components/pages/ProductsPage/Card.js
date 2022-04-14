import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
import {CartContext} from "../../../contexts/CartContext"


const Card = ({product}) =>{
    const { 
        cart, 
        setCart,
        quantifiedCart,
        setQuantifiedCart,
        setOutOfStock
    } = React.useContext(CartContext);
    //Card states
    //is the product in stock?Toggle Cart button depending on answer
    const [isInStock, setisInStock] = React.useState('False')
    
    //check if the product is in stock
    React.useEffect(() => {
        if (Number(product["numInStock"])>0) {
            setisInStock("True")
        }
        //on render check if product is in cart
        
    }, [product]);

//link to product page "/product/:prodId"
const productID = product["_id"]
// const navigate = useNavigate();
// function handleNavigate(event) {
//     navigate(`/product/${productID}`);
//     handleBubble(event);
// }

//Handlers
//onclick push product to cart and prevent propagation
function handleBubble(event) {
    event.stopPropagation();
    event.preventDefault()
}

function handleAddToCart(id) {
    let currentItem =  quantifiedCart.find(
        currentitem => currentitem._id === id
        )
    if(currentItem){

        if(currentItem.numInStock <= currentItem.quantity) {
            setOutOfStock(true)
            return
        }
    }
    console.log('added')
    setCart([...cart, product]);
}

function handleClick(event,id) {
    handleAddToCart(id);
    handleBubble(event);
}

//fix product name display lengths
let productName = [""];
if (product["name"].length>60) {
    productName = product["name"].substring(0,60) + "...";
} else {
    productName = product["name"]
}

 // change to product id when page is made
    return(<CardWrapper>
        <ProductImage src={product["imageSrc"]} ></ProductImage>
        <ProductName >{productName}</ProductName>
        <ProductPrice  onClick={handleBubble}>{product["price"]}</ProductPrice>
        
        {isInStock === "True" ? 

        <Button onClick={ (event)=>handleClick(event,product._id)}>Add to Cart</Button>
        :<Button disabled onClick={handleBubble}>Out of Stock</Button>}
        <Link to={`/product/${productID}`} >Product Info</Link>
    </CardWrapper>)
};

const CardWrapper =styled.div`
background-color: white;
color:black;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:1%;
height:330px;
width:200px;
/* box-shadow: 4px 4px 10px 4px #888888; */
border: 2px solid var(--color-lightgray);
border-radius:10px;
  @media(max-width: 768px){
    width:80%;
  }
`;
const ProductImage = styled.img`
width:100px;
height:100px;
padding-bottom:10px;
`;
const ProductName = styled.p`
width:160px;
height:80px;
font-size: 12px;
padding-bottom:20px;
text-align:center;
overflow:hidden;
`;

const ProductPrice = styled.div`
height:40px;
font-size: 20px;
padding-bottom:10px;
/* padding-top:10px; */
text-align:center;
`;


const Button = styled.button`
background: var(--color-cadetblue);
width:160px;
font-size: 20px;
margin-bottom:10px;
border-radius:10px;
text-align:center;
border: none;
padding: 5px;
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