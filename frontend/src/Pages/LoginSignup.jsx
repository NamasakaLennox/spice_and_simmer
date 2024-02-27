import React, { useState } from "react";
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const login = async () => {
    let responseData;
    await fetch("http://localhost:5000/api/v1/login/", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.error) {
      alert(responseData.error);
    } else {
      localStorage.setItem("x-access-token", responseData.token);
      localStorage.setItem("user_id", responseData.user.id);
      alert(`Successfully logged in as ${responseData.user.name}`);
      window.location.replace("/");
    }
  };

  const signup = async () => {
    let responseData;
    await fetch("http://localhost:5000/api/v1/create_user/", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.error) {
      alert(responseData.error);
    } else {
      alert(responseData.message);
      window.location.replace("/login");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign up" ? (
            <input
              value={formData.name}
              onChange={changeHandler}
              type="text"
              name="name"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
          />
        </div>

        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign up" ? (
          <>
            <div className="loginsignup-agree">
              <p>By continuing, you agree to the terms of use & privacy.</p>
            </div>
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setState("Login");
                }}
              >
                Login here
              </span>
            </p>
          </>
        ) : (
          <p className="loginsignup-login">
            Don't have an Account?{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setState("Sign up");
              }}
            >
              Sign up here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
