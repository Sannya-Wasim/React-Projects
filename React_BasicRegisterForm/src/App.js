import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstnameInputChange = (event) => {
    setValues({ ...values, firstname: event.target.value });
  };

  const handleLastnameInputChange = (event) => {
    setValues({ ...values, lastname: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    //this will prevent the refresh from happening everytime the submit button is clicked
    event.preventDefault();
    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="App">
      <section id="bg">
        <section className="logo">
          <div id="content">
            <img src="../assets/logo.png" alt="Logo not Found" />
            <h2 id="head2" style={{ color: "white" }}>
              Welcome!
            </h2>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              ducimus.
            </p>
          </div>
        </section>

        <section className="sign">
          <div id="content1">
            <h2>Sign Up</h2>
            <hr />
            <form action="" onSubmit={handleSubmit}>
              <div className="input">
                <input
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  placeholder="Enter your First Name"
                  onChange={handleFirstnameInputChange}
                />
                <br />
                {submitted && !values.firstname ? (
                  <span>Please enter a valid first name!</span>
                ) : null}
              </div>
              <div className="input">
                <input
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  placeholder="Enter your  Last Name"
                  onChange={handleLastnameInputChange}
                />
                <br />
                {submitted && !values.lastname ? (
                  <span>Please enter a valid last name!</span>
                ) : null}
              </div>
              <div className="input">
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  placeholder="Enter your Email"
                  onChange={handleEmailInputChange}
                />
              </div>
              <br />
              {submitted && !values.email ? (
                <span>Please enter a valid email!</span>
              ) : null}
              {submitted && valid ? (
                <div className="success-msg">
                  Success! Thank you for registering!
                </div>
              ) : null}

              <div className="labels">
                <div id="btn">
                  <button>Sign Up</button>{" "}
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}
