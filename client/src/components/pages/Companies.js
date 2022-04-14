import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../Loader/Loader"
const Companies= () => {
  const navigate = useNavigate()
  const [companies, setCompanies] = useState([])
    //on mount query of all companies and store them in state
    useEffect(() => {
        fetch(`/companies`)
            .then((res) => res.json())
            .then((response)=> {
            if(response.status !== 200){
                navigate('/')
            }
             setCompanies(response.data);
            })
            .catch(function() {
             navigate('/error-page')
        })
    }, []);

  if(companies.length <= 0) {
  return (
    <LoaderWrapper>
         <Loader />
    </LoaderWrapper>
  )
}
  return (
    <>
        <Title>Our Partners</Title>
        <Cards>
          {companies.map((company)=>{
          return <PartnerCard key ={company["_id"]}> 
            <h2 className="name">{company["name"]}</h2>
            <hr/>
            <a className="url" href={company["url"]} target="_blank" rel="noopener noreferrer">{company["url"]}</a>
            <div className="country">{company["country"]}</div>
            </PartnerCard>
          })}
        </Cards>
    </>
    );
};

export default Companies;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 26px;
    margin-top: 70px;
    margin-bottom: 20px;
    color: var(--color-cadetblue);
    text-shadow: black 1px 1px 2px;
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items:center;
justify-content: center;
padding: 0 50px 50px 50px;
`;

const PartnerCard = styled.div`
  border: solid 1px black;
  padding: 10px;
  margin: 10px;
  height: 200px;
  min-width: 280px;
  block-size: fit-content;
  text-align: center;
  border-radius: 20px;
  box-shadow: 4px 4px 10px 4px #888888;
  border: 5px solid none;
  border-radius:12px;

  .name{
    background: -webkit-linear-gradient(var(--color-darkgray), var(--color-aquamarine));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
    font-size: 22px;
    margin: 10px auto;
  }

  hr{
    margin-bottom: 10px;
  }

  a{
    font-size: 14px;
    color: gray;
    text-shadow: black 1px 0px;
    &:hover{
      color: var(--color-cadetblue);
    }
    &:visited{
      color: var(--color-lightgray);
      text-shadow: black 0px 0px;
      &:hover{
      color: var(--color-cadetblue);
    }
    }  
  }

  .country{
    padding-top: 20px;
    font-size: 12px;
    font-style: italic;
    color: var(--color-lightgray);
  }

`
 const LoaderWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
 `