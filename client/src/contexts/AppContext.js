import React from "react";


export const AppContext = React.createContext(null);

export const AppContextProvider = ({ children }) => {
   let name = "jed"
  return (
    <AppContext.Provider value={{
     username : name
    }}>
      {children}
    </AppContext.Provider>
  );
}