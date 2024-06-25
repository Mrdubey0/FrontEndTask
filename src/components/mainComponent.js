import React, { useState, useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

const MainComponent = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
   
    setUsers([
      { id: 1, name: "TestUser1", email: "testuser1@email.com" },
      { id: 2, name: "TestUser2", email: "testuser2@email.com" },
    ]);
  }, []);

  const addUser = ({ name, email }) => {
    const newUser = { id: users.length + 1, name, email };
    setUsers([...users, newUser]);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleUpdate = ({ id, name, email }) => {
    setUsers(users.map(user => (user.id === id ? { ...user, name, email } : user)));
    setEditUser(null);
  };

  return (
    <div id="main-container-wrapper" className="container">
      <InputHandler onSubmit={addUser} editUser={editUser} onUpdate={handleUpdate} />
      <SimpleTable dataSource={users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default MainComponent;