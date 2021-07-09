import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../Usercontext/UserContext';
import { Button, Modal } from 'react-bootstrap';
import "./delete.css";

 const Delete = () => {

    const [users, setUsers] = useContext(UserContext);

    const { Id }= useParams();
    const deletUser = (Id) => {
        const user = users.filter((user)=>user.Id != Id);
        setUsers(user);
    }


    return (
        <div>
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Are you sure?</Modal.Title>
  </Modal.Header>

  

  <Modal.Footer>
    <Link to="/"> <Button onClick={() => deletUser(Id)} variant="secondary">Delete</Button>
    <Button  className="action-button" variant="primary">Cancel</Button></Link>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    )
}

export default Delete;
