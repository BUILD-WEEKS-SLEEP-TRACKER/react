import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { login } from '../utils/actions/index';
import { connect } from 'react-redux';




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
      <div>
        <h1>Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <input
            name='email'
            type='text'
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            name='password'
            type='password'
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log in</button>
        </form>
        <Link to='/'><button>Register Here!</button></Link>
      </div>
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
