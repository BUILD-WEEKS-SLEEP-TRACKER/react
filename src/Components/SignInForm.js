import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Link} from "react-router-dom";




const SignInForm = ({ values, errors, touched, status })=>{
//   console.log("values", values);
//   console.log("errors", errors);
//   console.log("touched", touched);

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        console.log("status has changed", status);
        status && setUsers(users=>[...users, status]);
    }, [status]);

    return (
        <div>
            <Form>
                <label htmlFor="email">
                    Email:
                    <Field id="email" type="text" name="email" placeholder="enter email here"/>
                    {touched.email && errors.email && (
                    <p>{errors.email}</p>
                    )}
                </label>

                <label htmlFor="password">
                    Password: 
                    <Field id="password" type="text" name="password" placeholder="enter password here"/>
                    {touched.password && errors.password && (
                    <p>{errors.password}</p>
                    )}
                </label>
                <button type="submit">Submit!</button>
                <Link to="/signup"><button>Sign Up</button></Link>
               
                </Form>
                {users.map(user=>{
                    console.log(user)
                })}
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues(props){
        return {
            email: props.email || "",
            password: props.password || ""
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email is Required"),
        password: Yup.string().required("Password is Required"),
    }),
    handleSubmit(values, {setStatus, resetForm}){
        console.log('submitting', values);
        axios.post("https://reqres.in/api/users", values)
        .then(response=>{
            console.log("success", response)
            setStatus(response.data);
            resetForm()
        })
        .catch(error=> console.log(error.response));
    }
})(SignInForm);

export default FormikUserForm;




