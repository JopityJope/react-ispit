import React, { useState } from "react";

function Input({ onSubmit }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="github-username">GitHub username:</label>
      <input
        type="text"
        id="github-username"
        name="github-username"
        value={username}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Input;
