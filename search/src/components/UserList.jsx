import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserList() {
  const { users } = useContext(UserContext);

  return users.length === 0 ? (
    <div>No users found</div>
  ) : (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>Name : {user.name}</h3>
          <ul>
            <li>Email : {user.email}</li>
            <li>Gender : {user.gender}</li>
            <li>Status : {user.status}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UserList;
