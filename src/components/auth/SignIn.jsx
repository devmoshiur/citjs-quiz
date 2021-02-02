import React, { Component } from 'react'
import './AuthCustomCss.css'
class SignIn extends Component {
    state ={
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
            <div>
                <div className="center-card-box">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3 center">Sign In</h5>
                        <div className="input-feild">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Type your email here" name="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-feild">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="********" name="password" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-feild">
                            <button className="btn red lighten-1">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignIn
