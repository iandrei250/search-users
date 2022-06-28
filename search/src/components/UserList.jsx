import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserList({ language }) {
  const { users } = useContext(UserContext);

  return users.length === 0 ? (
    <div>{language.noUsers}</div>
  ) : (
    <div>
      {users.map((user) => (
        <div key={user.id} className="border mt-2 p-2">
          <h3>
            {language.name} : {user.name}
          </h3>
          <ul>
            <li>
              {language.email} : {user.email}
            </li>
            <li>
              {language.gender} : {user.gender}
            </li>
            <li>
              {language.status} : {user.status}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UserList;
