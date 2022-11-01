import React , { useState } from "react";

const Context = React.createContext({})

export function DogsContextProvider({children}) {
  const [dogs, setDogs] = useState([])
  
  return <Context.Provider value={{dogs, setDogs}}> 
    {children}
  </Context.Provider>
}

export default Context