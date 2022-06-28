import React from "react";
import { useState } from "react";

function UserSearch() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmitUser = (e) => {
    e.preventDefault();

    const fetchUsers = async () => {
      const req = await fetch(
        `https://gorest.co.in/public/v1/users?name=${text}`
      );

      const res = await req.json();

      console.log(res.data);
    };

    fetchUsers();
  };
  return (
    <div>
      <form>
        <label>Username</label>
        <div className="d-flex mb-3">
          <input
            type="text"
            value={text}
            className="form-control"
            placeholder="Enter a username..."
            onChange={handleChange}
          />
          <button className="btn btn-dark" onClick={onSubmitUser}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserSearch;
