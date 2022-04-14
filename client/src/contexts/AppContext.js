import React,{useState} from "react";
import {reactLocalStorage} from 'reactjs-localstorage';

export const AppContext = React.createContext(null);

export const AppContextProvider = ({ children }) => {
 const [user, setUserName] = useState(
    reactLocalStorage.getObject('user')
 )
 const localUser = reactLocalStorage.getObject('user')
 const [auth, setAuth] = useState(localUser.userId)
  return (
    <AppContext.Provider value={{
        setUserName,
        user,
        auth,
        setAuth,
    }}>
      {children}
    </AppContext.Provider>
  );
}