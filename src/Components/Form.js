import React, { Component} from 'react';
import axios from "axios"

class Form extends Component{
    constructor(props){
    super(props)
    this.state={
        userId:'',
        title:'',
        body:''
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
        console.log("something went wrong", error)
    })
}
    render(){
        const {userId, title, body} =this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>

                    <div>
                    <input type="text" name="title"value={title} onChange={this.changeHandler}/>
                    </div>

                    <div>
                    <input type="text" name="body"value={body} onChange={this.changeHandler}/>
                    </div>
                    
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Form