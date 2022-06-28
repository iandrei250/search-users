import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const setUsersToDisplay = (usersArr) => {
    setUsers(usersArr);
  };
  return (
    <UserContext.Provider value={{ users, setUsersToDisplay }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
