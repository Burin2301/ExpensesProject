/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

const GlobalContext = createContext()

export function GlobalContextProvider({children}){

    const [addedAmount, setAddedAmount] = useState(0)

    return(
        <GlobalContext.Provider
        value={{
            addedAmount,
            setAddedAmount
            
        }} >
            {children}
        </GlobalContext.Provider>
    )
    
}

export{
    GlobalContext
}