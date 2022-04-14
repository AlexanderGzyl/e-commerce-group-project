import React,{useState, useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import {reactLocalStorage} from 'reactjs-localstorage';
import {AppContext} from "../../contexts/AppContext"



const Login = () => {
 const [error, setErrors] = useState(false)
 const navigate = useNavigate()
 const {
   setUserName,setAuth
   } = useContext(AppContext)
 const login = (e) => {
  e.preventDefault();
  const loginParams = {
   email : e.target.email.value,
   password : e.target.password.value,
  }
  fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginParams),
  }).then(res=> res.json())
    .then((response) => {
      if(response.status === 200) {
        setAuth(true)
        reactLocalStorage.setObject('user',response.user);
        setUserName(reactLocalStorage.getObject('user'))
        return navigate('/admin')
      }
      if(response.status === 401) {
        setErrors(response.message)
        setUserName(false)
        reactLocalStorage.remove('user');
        return navigate('/login')
      }
    }).catch(err => {
      navigate('/error-page')
    })
 }
  
  return (
  <Wrapper>
     <div className="login-area">
          {
          error && (
              <div className="error-message">{error}</div>
            )
          }
        <form id="login-part" className="login-part" onSubmit={login} >
          <input type="text" required id="email" name="email" placeholder="Email" />
          <input type="password" required id="password" name="password" placeholder="Password" />
          <button type="submit"  id="submitlogin"  value="submit">Login</button>
        </form>
        <a href="/signup" className="signup">signup</a>
      </div>
  </Wrapper>
)}

const Wrapper = styled.div`

 height: 100vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
.login-area {
    text-align: center;
}
.login-part {
    display: flex;
    flex-direction: column;
    gap: 5px 0px;
   input {
    padding: 5px;
   }
   a {
     color: #45a29e;
   }
}
button {
    background: #45a29e;
    padding: 9px 10px;
    border: none;
    color: #fff;
    &:hover {
    background: black;
    color: #fff;
    cursor: pointer;
  }
}.error-message {
    text-align: center;
    color: #aa001e;
    font-family: 'Kosugi',Arial,Helvetica,sans-serif;
    font-size: 20px;
    margin-bottom: 6px;
    text-transform: capitalize;


}

`

export default Login;
