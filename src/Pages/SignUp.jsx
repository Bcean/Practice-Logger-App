import React, { isValidElement } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export const SignUp = () => {
  //form data stored within an object
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    retypedPassword: "",
    instrument: "",
  });

  //set submit status
  const [isSubmited, setisSubmited] = useState(false);
  //change input fields
  const changeField = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setformData({
      ...formData, //keep previous values
      [inputName]: inputValue, //change input field by changing object
    });
  };
  //form error message
  const [errorMsg, seterrorMsg] = useState({
    userErr: "",
    emailErr: "",
    passwordErr: "",
    retypedPasswordErr: "",
  });
  //form validation. checking once form is submited
  const formValidation = async (e) => {
    //async function to handle await
    e.preventDefault();

    // Clear error messages
    const errors = {};
    //check if username fits perametres

    if (!formData.username.trim()) {
      errors.userErr = "Your username is empty"; //check if field is filled
    } else if (!/^[a-zA-Z0-9_-]{3,20}$/.test(formData.username)) {
      //check if username does not fit these parameteres

      errors.userErr =
        "Username must be 3–20 characters and can include letters, numbers, underscores, or hyphens.";
    }

    if (!formData.email.trim()) {
      errors.emailErr = "Your email is empty"; //check if field is filled
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      //check if email does not fit these parameteres
      errors.emailErr = "Please enter a valid email address";
    }
    if (!formData.password.trim()) {
      errors.passwordErr = "Your password is empty"; //check if field is filled
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      //check if passowrd does not fit these parameteres

      errors.passwordErr =
        "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
    }

    if (!formData.retypedPassword.trim()) {
      errors.retypedPasswordErr = "Your retyped password field is empty"; //check if field is filled
    } else if (formData.retypedPassword !== formData.password) {
      //check if re typed passowrd does not fit these parameteres

      errors.retypedPasswordErr = "Retyped password must match password";
    }
    seterrorMsg(errors);

    //check if the object is empty so no errors
    const isValid = Object.keys(errors).length === 0;
    setisSubmited(isValid); //true
    //if no errors then send data to backend

    if (isValid) {
      console.log("Data submitted successfully", formData);
      //clear form and send data to backend *hashpassword*
      try {
        //send request to endpoint in backend
        const response = await fetch("http://localhost:8000/api/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), //send form data in json format
        });

        const result = await response.json();
        if (response.ok) {
          alert("user successfully created");
        } else {
          alert(response.status);
        }
      } catch (error) {
        alert(error.message);
      }

      setformData({
        username: "",
        email: "",
        password: "",
        retypedPassword: "",
        instrument: "",
      });
    }
  };

  return (
    <div className="h-full w-full bg-violet-300 flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-extrabold">Welcome to PractR</h1>
      <div className="h-max w-1/3 bg-white rounded shadow-lg flex flex-col items-center gap-4 justify-center p-2">
        <h1 className="text-5xl font-bold">Sign up</h1>
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={formValidation}
        >
          <input
            onChange={changeField}
            value={formData.username}
            name="username"
            type="text"
            placeholder="Username"
            className="border border-black rounded w-80 h-14"
            required
          ></input>
          <p className="text-sm font-light text-red-700 underline">
            {errorMsg.userErr}
          </p>
          <input
            onChange={changeField}
            value={formData.email}
            name="email"
            type="email"
            placeholder="Email"
            className="border border-black rounded w-80 h-14"
            required
          ></input>
          <p className="text-sm font-light text-red-700 underline">
            {errorMsg.emailErr}
          </p>
          <select
            name="instrument"
            className="border border-black rounded w-80 h-14"
            required
            value={formData.instrument}
            onChange={changeField}
          >
            <option value="" disabled selected>
              Select your instrument
            </option>
            <option value="Flute">Flute</option>
            <option value="Clarinet">Clarinet</option>
            <option value="Oboe">Oboe</option>
            <option value="Alto Sax">Alto Sax</option>
            <option value="Tenor Sax">Tenor Sax</option>
            <option value="Barry Sax">Barry Sax</option>
            <option value="French Horn">French Horn</option>
            <option value="Trombone">Trombone</option>
            <option value="Euphonium">Euphonium</option>
            <option value="Tuba">Tuba</option>
            <option value="Trumpet">Trumpet</option>
            <option value="Percussion">Percussion</option>
            <option value="Piano">Piano</option>
            <option value="Bass">Bass</option>
            <option value="Guitar">Guitar</option>
          </select>
          <input
            onChange={changeField}
            value={formData.password}
            name="password"
            type="password"
            placeholder="Password"
            className="border border-black rounded w-80 h-14"
            required
          ></input>
          <p className="text-sm font-light text-red-700 underline">
            {errorMsg.passwordErr}
          </p>
          <input
            onChange={changeField}
            value={formData.retypedPassword}
            name="retypedPassword"
            type="password"
            placeholder="Retype Password"
            className="border border-black rounded w-80 h-14"
            required
          ></input>
          <p className="text-sm font-light text-red-700 underline">
            {errorMsg.retypedPasswordErr}
          </p>

          <button
            type="submit"
            className="bg-violet-500 p-2 rounded shadow-lg font-bold text-2xl w-26 h-fit m-8 hover:brightness-75"
          >
            Sign Up
          </button>
        </form>
        {isSubmited && (
          <p className="text-sm font-light text-green-700 underline">
            Sign up succesful! check your email!
          </p>
        )}
        <h6 className="tex-xl font-light text-violet-700 underline">
          <Link to="/Login">Already have an account? Login here</Link>
        </h6>
      </div>
    </div>
  );
};
