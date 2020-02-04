import React, { Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
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
    display:flex;
    flex-direction:column;
  
    width:564px;
`
const Button=styled.button`
    background: #39869D;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    width: 280px;
    height: 36px;
    margin-bottom
`
const Name = styled.div`
    display:flex;
    justify-content: space-between;
`
const CheckBox =styled.div`
    color:white;
`


class SignUpForm extends Component{
    constructor(props){
    super(props)
    this.state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    }
}
changeHandler=(e) =>{
    this.setState({[e.target.name]: e.target.value})  // setting change handler to the "name" attribute. Avoids having to add handler to each input
}

submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post("", this.state)// API LINK HERE
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log("Data didn't post", error)
    })
}
    render(){
        const {firstName, lastName, email, password} =this.state
        return(
        <div className="field">
             <div>
                <Header>Let’s get started!</Header>
                <Paragraph>Let Sleep Tracker help you discover your ideal sleep schedule. </Paragraph>
            </div>
                <Form className="form" onSubmit={this.submitHandler}>
                    
                 <Name> 
                    <div>
                        <label>
                            <input className="input" type="text" name="firstName" value={firstName} onChange={this.changeHandler} placeholder="First Name" style={{width: "208px", height: "56px"}}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            <input className="input" type="text" name="lastName"value={lastName} onChange={this.changeHandler} placeholder="Last Name" style={{width: "208px", height: "56px"}}/>
                        </label>
                    </div>
                </Name> 
                    <div>
                        <label>
                            <input className="input" type="text" name="email"value={email} onChange={this.changeHandler} placeholder="Email " style={{width: "560px", height: "56px"}}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            <input className="input" type="text" name="password"value={password} onChange={this.changeHandler} placeholder="Password" style={{width: "560px", height: "56px"}}/>
                        </label>
                    </div>

                    <CheckBox>
                        <label> 
                            <input className="input" name="TermsOfService" type="checkbox" onChange={this.changeHandler}/>
                            Keep Me Signed In
                        </label>
                 
                    </CheckBox>

                <div> 
                    <Button type="submit">Submit</Button>
                    <Link to="/"><Button>Sign In</Button></Link>
                </div>
                </Form>
            </div>
        )
    }
}
export default SignUpForm