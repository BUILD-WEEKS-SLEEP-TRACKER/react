import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Link} from "react-router-dom";

import { login } from '../utils/actions/index';
import { connect } from 'react-redux';




// const SignInForm = ({ values, errors, touched, status }, props)=>{
// //   console.log("values", values);
// //   console.log("errors", errors);
// //   console.log("touched", touched);
// console.log("this is props in SignInForm", props)

//     const [users, setUsers] = useState([]);

//     useEffect(()=>{
//         console.log("status has changed", status);
//         status && setUsers(users=>[...users, status]);
//     }, [status]);

//     return (
//         <div>
//             <Form>
//                 <label htmlFor="email">
//                     Email:
//                     <Field id="email" type="text" name="email" placeholder="enter email here"/>
//                     {touched.email && errors.email && (
//                     <p>{errors.email}</p>
//                     )}
//                 </label>

//                 <label htmlFor="password">
//                     Password: 
//                     <Field id="password" type="text" name="password" placeholder="enter password here"/>
//                     {touched.password && errors.password && (
//                     <p>{errors.password}</p>
//                     )}
//                 </label>
//                 <Link to ="/main-page"> <button type="submit">Sign In!</button></Link>
//                 <Link to="/"><button>Sign Up</button></Link>
               
//                 </Form>
//                 {users.map(user=>{
//                     console.log("these are users", user)
//                 })}
//         </div>
//     );
// };

// const FormikUserForm = withFormik({
//     mapPropsToValues(props){
//         return {
//             email: props.email || "",
//             password: props.password || ""
//         };
//     },

//     validationSchema: Yup.object().shape({
//         email: Yup.string().required("Email is Required"),
//         password: Yup.string().required("Password is Required"),
//     }),
//     handleSubmit(values, {setStatus, resetForm}){
//         console.log('submitting', values);
//         axios.post("https://reqres.in/api/users", values)
//         .then(response=>{
//             console.log("success", response)
//             setStatus(response.data);
//             resetForm()
//         })
//         .catch(error=> console.log(error.response));
//     }
// })(SignInForm);

// const mapStateToProps = state => {
//     return { 
        
//      }
// }

// export default connect(
//     mapStateToProps,
//     { login }
// )(FormikUserForm)

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




