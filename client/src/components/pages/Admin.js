import React,{ useContext,useState,useEffect} from "react";
import {AppContext} from "../../contexts/AppContext"
import { useNavigate } from "react-router-dom"
import {reactLocalStorage} from 'reactjs-localstorage';
import styled from "styled-components";
import OrdersTable from '../../Common/ordersTable'
import Loader from "../Loader/Loader"

const Admin = () => {
  const {
   setUserName,setAuth
   } = useContext(AppContext)
   const navigate = useNavigate()
   const [orders, setOrders] = useState([])
   //logout
   const logout = (e) => {
    setAuth(false)
    e.preventDefault();
    fetch('/logout').then(res=> res.json())
      .then((response) => {
        setUserName(false)
        reactLocalStorage.remove('user');
        if(response.status === 401 || response.status === 403) {
        return navigate('/login')
        }
        if(response.status === 200) {
          setAuth(false)
          return navigate('/login')
        }
      }).catch(err => {
        navigate('/error-page')
      })
   }

  useEffect(() => {
     fetch(`/orders`)
        .then(res=> res.json())
        .then(response => {
           setOrders(response.data)
        })
        .catch(err => {
          return navigate('/login')
        })

  }, []);
   
if(orders.length <= 0) {
  return (
    <LoaderWrapper>
         <Loader />
    </LoaderWrapper>
  )
}
 return (
  <AdminWrapper>
    
   <button className="logout" onClick={logout}>Logout</button>
   <div className="ordersTable">
     <OrdersTable orders={orders}/>
   </div>
  </AdminWrapper>
 );
};

const AdminWrapper = styled.div`
    height: 100vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    button.logout {
    position: fixed;
    top: 65px;
    right: 20px;
    background: #45a29e;
    border: none;
    padding: 10px 20px;
    color: #fff;
    z-index: 9999;
    &:hover{
     cursor: pointer;
     background:black;
     color: white;
    }
}
`
 const LoaderWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
 `

export default Admin;