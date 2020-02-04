import React, { useState, useEffect, Component } from "react";
import { withFormik, Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components"

const Header= styled.h1`
    position: absolute;
    width: 448px;
    height: 112px;
    left: 144px;
    top: 352px;
    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 54px;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.87);
 `
 const Paragraph= styled.p`
    position: absolute;
    width: 448px;
    height: 56px;
    left: 144px;
    top: 496px;
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
    display: flex;
    align-items: center;
 
 color: rgba(255, 255, 255, 0.6);
 `

 const  Form=styled.div`
    margin-left:50%;
 `
 const Button=styled.button`
    background: #39869D;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    width: 280px;
    height: 36px;
    margin-bottom
 `
 const Cta =styled.div`
 `
 




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
            <div>
                <Header>Let’s get started!</Header>
                <Paragraph>Let Sleep Tracker help you discover your ideal sleep schedule. </Paragraph>
            </div>
            <Form>
                <label htmlFor="email">
                    <Field id="email" 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    style={{width: "560px", height: "56px"}}/>
                    {touched.email && errors.email && (
                    <p>{errors.email}</p>
                    )}
                </label>

                <label htmlFor="password">
                   
                  <Field 
                  id="password" 
                  type="text" 
                  name="password" 
                  placeholder="Password" 
                  className="field" 
                  style={{width: "560px", height: "56px"}}/>
                    {touched.password && errors.password && (
                    <p>{errors.password}</p>
                    )}
                </label>
                
                <Cta>
                    <Link to="/signup"><Button>Sign Up</Button></Link>
                    <Link to ="/chartdisplay"><Button type="submit">Login</Button></Link>
                </Cta>

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