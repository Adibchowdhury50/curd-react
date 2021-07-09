import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Edit.css";
import { useState } from "react";
import { UserContext } from "../Usercontext/UserContext";

const Edit = () => {
  const [users, setUser] = useContext(UserContext);
  const { Id } = useParams();
  const user = users.filter((user) => user.Id == Id);

  const [Name, setName] = useState(user[0].Name);
  const [Position, setPosition] = useState(user[0].Position);
  const [Salary, setSalary] = useState(user[0].Salary);
  

  const editName = (e) => {
    setName(e.target.value);
    const edited_Name = Name;
    user[0].Name = edited_Name;
  };

  const editPosition = (e) => {
    setPosition(e.target.value);
    const edited_Position = Position;
    user[0].Position = edited_Position;
  };

  const editSalary = (e) => {
    setSalary(e.target.value);
    const edited_salary = Salary;
    user[0].Salary = edited_salary;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {user[0].Id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            value={Name}
            onChange={editName}
            placeholder={user[0].Name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="Position"
            // value={position}
            onChange={editPosition}
            placeholder={user[0].Position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            // value={salary}
            onChange={editSalary}
            placeholder={user[0].Salary}
          />
        </Form.Group>
        <Link to="/">
          <Button onSubmit={()=>editUser} variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;