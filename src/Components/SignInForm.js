import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { login } from '../utils/actions/index';
import { connect } from 'react-redux';

import {Header, Paragraph, Form, Button, Input, Container, Scontainer} from './SignInStyles'


const SignInForm = (props) => {
    const [credentials, setCredentials] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (event) => {
      event.preventDefault();
      
      setCredentials({
        ...credentials,
        [event.target.name]: event.target.value
      })
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.login(credentials);
      setTimeout(() => {
        props.history.push('/main-page');
      }, 800)
    }
  
    return (
      <Container>
          <Scontainer>
            <Header>Let’s get started!</Header>
            <Paragraph>Let Sleep Tracker help you discover your ideal sleep schedule.</Paragraph>
          </Scontainer>
        <Form onSubmit={handleSubmit}>
          <Input
            style={{width: "560px", height: "56px"}}
            name='email'
            type='text'
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <Input
            style={{width: "560px", height: "56px"}}
            name='password'
            type='password'
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <div>
            <Button type="submit">Log in</Button>
            <Link to='/'><Button>Register Here!</Button></Link>
          </div>
        </Form>
        
      </Container>
    )
  }
  
  const mapStateToProps = state => {
    return {
      fetchingData: state.fetchingData,
      isLoggedIn: state.isLoggedIn,
      error: state.error,
      id: state.id
    }
  }
  
  export default connect(mapStateToProps, { login })(SignInForm);
