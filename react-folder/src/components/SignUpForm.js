import React, { Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios"


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
                <form className="form" onSubmit={this.submitHandler}>
                    <label>New User </label>
                    
                    <div>
                        <label>First Name:
                            <input className="input" type="text" name="firstName" value={firstName} onChange={this.changeHandler} placeholder="Enter First Name here"/>
                        </label>
                    </div>

                    <div>
                        <label>Last Name:
                            <input className="input" type="text" name="lastName"value={lastName} onChange={this.changeHandler} placeholder="Enter Last Name here"/>
                        </label>
                    </div>
                    <div>
                        <label>Your Email:
                            <input className="input" type="text" name="email"value={email} onChange={this.changeHandler} placeholder="Enter Email here"/>
                        </label>
                    </div>

                    <div>
                        <label>Password:
                            <input className="input" type="text" name="password"value={password} onChange={this.changeHandler} placeholder="Enter Password here"/>
                        </label>
                    </div>

                    <div>
                        <label>Terms of Service:
                            <input className="input" name="TermsOfService" type="checkbox" onChange={this.changeHandler}/>
                        </label>
                 
                    </div>
                    
                <button type="submit">Submit</button>
                <Link to="/"><button>Sign In</button></Link>
                </form>
            </div>
        )
    }
}
export default SignUpForm