import React from "react"
import styled from "styled-components";
import {BiRightArrow,BiLeftArrow} from "react-icons/bi";
//there are 348 items
//add highlight on active button
const Pagination = ({setCurrentPage, currentPage})=>{

    React.useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
      }, [currentPage]);

    
    function goToNextPage() {
        //need to disable based on page number
        if (currentPage!==35){
            setCurrentPage((page) => page + 1);
        };
        
     }
   
     function goToPreviousPage() {
         //need to disable based on page number
        if (currentPage>1){
            setCurrentPage((page) => page - 1);
        }
     }
   
     function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
     }
   
     const getPaginationGroup = () => {
        let pageLimit =5;
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((ele, idx) => start + idx + 1);
      
     };
    //return buttons
     return(
     <ButtonWrapper>
     <PrevButton onClick={ goToPreviousPage}><PrevIcon/></PrevButton>
     
     {getPaginationGroup().map((item, index) => (
        <Button
          key={index}
          onClick={changePage}
          isActive={`${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </Button>
      ))}
     <NextButton onClick={ goToNextPage}><NextIcon/></NextButton>
     </ButtonWrapper>
     
     )

};

const NextButton = styled.button`
background: var(--color-cadetblue);
margin:3px;
border:none;
border-radius:10px;
width:30px;
display:flex;
align-items:center;
justify-content:center;
`;
const NextIcon = styled(BiRightArrow)`
font-size: 20px;
`;
const PrevButton = styled.button`
background: var(--color-cadetblue);
margin:3px;
border: none;
font-size: 20px;
border-radius:10px;
width:30px;
display:flex;
align-items:center;
justify-content:center;
`;
const PrevIcon = styled(BiLeftArrow)`
font-size: 20px;
`;
const Button = styled.button`
width:30px;
background: var(--color-cadetblue);
margin:3px;
border: none;
font-size: 20px;
border-radius:50%;
color: ${(props) =>
    props.isActive === "active" ? "#66FCF1" : "black"};
`;

const ButtonWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`

export default Pagination
