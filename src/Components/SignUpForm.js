import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { register } from "../utils/actions/index";
import { connect } from "react-redux";
import { Header, Paragraph, Form, Name, Button, Input, Scontainer, Container } from "./SignUpStyles";

const SignUpForm = props => {
  console.log("this is props in Signupform", props);
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  const [payload, setPayload] = useState(initialState);

  const changeHandler = e => {
    setPayload({ ...payload, [e.target.name]: e.target.value }); // setting change handler to the "name" attribute. Avoids having to add handler to each input
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log("this is the object", payload);
    props.register(payload);
    setPayload({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
    props.history.push("/sign-in");
    // axios.post("https://bw-sleeptracker.herokuapp.com/api/auth/register", this.state)// API LINK HERE
    // .then(response=>{
    //     console.log("this is the response from submit", response)

    // })
    // .catch(error=>{
    //     console.log("Data didn't post", error)
    // })
  };
  return (
    <Container>
      <Scontainer>
        <Header>Let’s get started!</Header>
        <Paragraph>
          Let Sleep Tracker help you discover your ideal sleep schedule.
        </Paragraph>
      </Scontainer>
      <Form className="form" onSubmit={submitHandler}>
        <Name>
          <div>
            <label>
              <Input
                className="input"
                style={{ width: "208px", height: "56px" }}
                type="text"
                name="firstName"
                value={payload.firstName}
                onChange={changeHandler}
                placeholder="Enter First Name here"
              />
            </label>
          </div>
       
          <div>
            <label>
              <Input
                className="input"
                style={{ width: "208px", height: "56px" }}
                type="text"
                name="lastName"
                value={payload.lastName}
                onChange={changeHandler}
                placeholder="Enter Last Name here"
              />
            </label>
          </div>
        </Name>
        <div>
          <label>
            <Input
              className="input"
              style={{ width: "560px", height: "56px" }}
              type="text"
              name="email"
              value={payload.email}
              onChange={changeHandler}
              placeholder="Enter Email here"
            />
          </label>
        </div>

        <div>
          <label>
            <Input
              className="input"
              style={{ width: "560px", height: "56px" }}
              type="text"
              name="password"
              value={payload.password}
              onChange={changeHandler}
              placeholder="Enter Password here"
            />
          </label>
        </div>

        {/* <div>
                        <label>Terms of Service:
                            <input className="input" name="TermsOfService" type="checkbox" onChange={this.changeHandler}/>
                        </label>
                 
                    </div> */}
        <div>
            <Button type="submit">Sign-Up!</Button>
            <Link to="/sign-in"><Button>Sign In</Button></Link>
        </div>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    data: [
      {
        email: state.email,
        name: state.name,
        password: state.password
      }
    ]
  };
};

export default connect(mapStateToProps, { register })(SignUpForm);
