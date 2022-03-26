import { useState, createContext, useContext } from "react";

const LayoutContext = createContext();

const LayoutProvider = ({children}) => {

    const [showSidebar , setShowSidebar] = useState(true);

    return(
        <LayoutContext.Provider value={{showSidebar , setShowSidebar}}>
            {children}        
        </LayoutContext.Provider>    
    )
}

const useLayout = () =>useContext(LayoutContext);

export { useLayout , LayoutProvider };