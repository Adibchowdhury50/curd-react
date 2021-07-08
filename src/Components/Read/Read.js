import React, { useContext } from 'react'
import { UserContext } from '../Usercontext/UserContext';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Read = () => {

    const [users, setUsers] = useContext(UserContext);

    const { Id }= useParams();
    const user = users.filter((user)=>user.Id == Id);
    
    return (
        <div>
            <h1>Id: {user[0].Id}</h1>
            <h1>Name: {user[0].Name}</h1>
            <h1>Positon: {user[0].Position}</h1>
            <h1>Salary: {user[0].Salary} </h1>

            <Link to="/">
            <Button variant="info">Back to Home</Button>
            </Link>
            
        </div>
    )
}

export default Read
