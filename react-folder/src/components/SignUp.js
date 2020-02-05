import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../utils/actions/index";
import {Link} from 'react-router-dom';

function SignUp(props) {
    const intialState = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  
    const [payload, setPayload] = useState(intialState);
  
    const handleChange = event => {
      setPayload({ ...payload, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        props.register(payload);
        props.history.push("/");
  
      console.log(handleSubmit);
    };
  
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={payload.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={payload.lastName}
            onChange={handleChange}
            required
          />
             <input
            name="email"
            type="email"
            placeholder="email"
            value={payload.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            minLength={4}
            maxLength={10}
            value={payload.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <Link to='/'><button>Already Have an Account?</button></Link>
      </div>
    );
  }

  const mapStateToProps = state => {
    return { reg_user: state.reg };
  };
  
  export default connect(
    mapStateToProps,
    { register }
  )(SignUp);