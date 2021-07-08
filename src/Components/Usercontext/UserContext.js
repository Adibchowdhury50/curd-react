import { createContext } from "react"
import { useState } from "react";

export const UserContext = createContext();

export const UserProvder = (props) => {
    const [users, setUsers] = useState(
        [
        {Id:1, Name:"Kafi", Position:"web developer", Salary:25000},
        {Id:2, Name:"Riyad", Position:"web developer", Salary:25000},
        {Id:3, Name:"Kamrul", Position:"web developer", Salary:25000}
    ]
        );
        return (<UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>);
};