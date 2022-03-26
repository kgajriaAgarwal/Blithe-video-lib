import { useState, createContext, useContext } from "react";
import { v4 as uuid } from "uuid";

const AlertContext = createContext();

const AlertProvider = ({children}) => {

    const [alertContent , setAlertContent] = useState({ _id: uuid(), isShow:false, type:'', content:''});

    return(
        <AlertContext.Provider value={{alertContent , setAlertContent}}>
            {children}        
        </AlertContext.Provider>    
    )
}

const useAlert = () =>useContext(AlertContext);

export { useAlert , AlertProvider };