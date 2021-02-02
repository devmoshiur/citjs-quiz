import React, { Component } from 'react'
import './AuthCustomCss.css'
class SignUp extends Component {
    state ={
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }

    handleChange = (e) =>{
       this.setState({
           [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="center-card-box">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3 center">Sign Up</h5>
                        <div className="row">
                            <div className="input-feild col s12 m6 l6">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" name="firstname" id="firstname" onChange={this.handleChange} />
                            </div>              
                            <div className="input-feild col s12 m6 l6">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" name="lastname" id="lastname" onChange={this.handleChange} />
                            </div>              
                        </div>
                        <div className="row">
                            <div className="input-feild">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="Type your email here" name="email" id="email" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-feild">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="********" name="password" id="password" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="input-feild">
                            <button className="btn red lighten-1">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignUp
