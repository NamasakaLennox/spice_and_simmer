import React, { useState } from "react";

export const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const login = async () => {
    console.log("login");
    //console.log("Login function executed", formData);
    // let responseData;
    // await fetch("http://localhost:4000/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/form-data",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => (responseData = data));

    // if (responseData.success) {
    //   localStorage.setItem("auth-token", responseData.token);
    //   window.location.replace("/");
    // } else {
    //   alert(responseData.error);
    // }
  };

  const signup = async () => {
    console.log("signup");
    //console.log("Signup function executed", formData);
    // let responseData;
    // await fetch("http://localhost:4000/signup", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/form-data",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => (responseData = data));

    // if (responseData.success) {
    //   localStorage.setItem("auth-token", responseData.token);
    //   window.location.replace("/");
    // } else {
    //   alert(responseData.error);
    // }
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
              <p>By continuing, I agree to the terms of use & privacy.</p>
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
            Create an Account?{" "}
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
