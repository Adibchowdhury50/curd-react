import React from 'react'
import {  useContext } from 'react'
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../Usercontext/UserContext';
import './home.css'
import { Link } from 'react-router-dom';



 const Home = () => {
    const [users, setUsers] = useContext(UserContext);
    console.log(users);
        return (
            <div>
              <Link to="/Create">
                <Button className="create-user" variant="outline-primary">create user</Button>
                </Link>
                <Table striped bordered hover className="tbl">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Position</th>
      <th>Salary</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      { users.map(user =>  
      <tr>
      <td>{user.Id}</td>
      <td>{user.Name}</td>
      <td>{user.Position}</td>
      <td>{user.Salary}</td>
      <td>
      <Link to={"/Read/"+user.Id}>
      <Button className="acton-button" variant="success">Read</Button>
      </Link>
      <Link to={"/Edit/"+user.Id}>
      <Button className="acton-button" variant="warning">Edit</Button>
      </Link>
      <Link to={"/Delete/"+user.Id}>
      
      <Button className="acton-button" variant="danger">Delete</Button>
      </Link>
     
      </td>
    </tr> )}
   
    
  </tbody>
</Table>
            </div>
        )
}
export default Home;
