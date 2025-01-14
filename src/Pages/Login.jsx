import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });

  const changeTextField = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setloginData({ ...loginData, [inputName]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData), //convert data to json
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.access_token);
        alert("Login successfull");
      } else {
        alert(response.status);
      }
    } catch (error) {
      alert("error" + error.message);
    }
  }; ///
  return (
    <div className="h-full w-full bg-violet-300 flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-extrabold">Welcome to PractR</h1>
      <div className="h-3/5 w-1/3 bg-white rounded shadow-lg flex flex-col items-center gap-4 justify-center">
        <h1 className="text-5xl font-bold">Login</h1>
        <form
          className="flex flex-col items-center gap-5"
          onSubmit={handleSubmit}
        >
          <input
            onChange={changeTextField}
            name="username"
            type="text"
            placeholder="Username"
            className="border border-black rounded w-80 h-14"
            required
            value={loginData.username}
          ></input>
          <input
            onChange={changeTextField}
            value={loginData.password}
            name="password"
            type="password"
            placeholder="Password"
            className="border border-black rounded w-80 h-14"
            required
          ></input>
          <button
            type="submit"
            className="bg-violet-500 p-2 rounded shadow-lg font-bold text-2xl w-24 h-fit m-8 hover:brightness-75"
          >
            Login
          </button>
        </form>
        <h6 className="tex-xl font-light text-violet-700 underline">
          <Link to="/SignUp">Don't have an account? Create one here</Link>
        </h6>
      </div>
    </div>
  );
};
