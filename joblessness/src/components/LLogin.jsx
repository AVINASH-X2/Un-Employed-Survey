import React from "react";
import "../components/llogin.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LLogin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://127.0.0.1:3001/login", {
          firstName,
          lastName,
          email,
          city,
          state,
          zip,
        })
        .then((result) => {
          window.alert("Registration successfull...");
          console.log(result);
          navigate("/");
          console.log("Home Page");
        });
    } catch (error) {
      console.error("Error...", error);
    }
  };

  return (
    <div style={{ marginTop: "7rem" }} className="the-div-login">
      <h1 style={{ color: "white" }}>
        Please fill up these <span style={{ color: "yellow" }}>details</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: "4rem" }}
        className="row g-3 needs-validation"
        noValidate
      >
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstNamee"
            onChange={(e) => setFirstName(e.target.value)}
            //value="Mark"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            required
            //value="Otto"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="email">
              @
            </span>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <div style={{ color: "white" }} className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select
            className="form-select"
            id="state"
            name="state"
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option defaultValue disabled value="">
              Choose...
            </option>
            <option>...</option>
            <option>Bihar</option>
            <option>Uttar Pradesh</option>
            <option>Jharkhand</option>
            <option>Delhi</option>
            <option>Odisha</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            onChange={(e) => setZip(e.target.value)}
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        {/* <div className="col-12"> */}
        {/* <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="checkbox"
              value=""
              id="invalidCheck"
              required
            /> */}
        {/* <label
              style={{ color: "green" }}
              className="form-check-label"
              htmlFor="invalidCheck"
            >
              Agree to terms and conditions
            </label> */}
        {/* <div className="invalid-feedback">
              You must agree before submitting.
            </div> */}
        {/* </div> */}
        {/* </div> */}
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
