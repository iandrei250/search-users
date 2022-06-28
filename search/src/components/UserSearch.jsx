import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

function UserSearch({ language }) {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);

  const { setUsersToDisplay } = useContext(UserContext);

  const handleChange = (e) => {
    setText(e.target.value);

    if (text.length > 2) setDisabled(false);
  };

  const onSubmitUser = (e) => {
    e.preventDefault();

    const fetchUsers = async () => {
      const req = await fetch(
        `https://gorest.co.in/public/v1/users?name=${text}`
      );

      const res = await req.json();

      setUsersToDisplay(res.data);
    };

    fetchUsers();
  };
  return (
    <div className="mt-3">
      <form>
        <label className="mb-3">
          <h3>{language.username}</h3>
        </label>
        <div className="d-flex mb-3">
          <input
            type="text"
            value={text}
            className="form-control"
            placeholder={`${language.placeholder}...`}
            onChange={handleChange}
          />
          <button
            className="btn btn-dark ms-2"
            onClick={onSubmitUser}
            disabled={disabled}
          >
            {language.search}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserSearch;
