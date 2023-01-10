import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Both fields are required");
      return;
    }

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      setError("Error! Try again!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Username"
        type="text"
        value={username}
        handleChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      />
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <button type="submit">Submit</button>
      {token && <p>Token: {token}</p>}
    </form>
  );
}

export default LoginForm;
