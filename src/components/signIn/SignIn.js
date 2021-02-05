import React from 'react'
import './SignIn.scss'
import makeToast from "../toaster";
import useChat from "../useChat";
import Home from '../Home/Home';







class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailQuery:'',
            bool:true
        }
    }

    handleChange = (event, type) => {
        this.setState({
            [type]: event.target.value,
        })
    }

    handleSignIn = (event) => {
        event.preventDefault()
        let r = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (r.test(this.state.email)) {
            let body =
                {
                    email: this.state.email,
                    password: this.state.password
                }
            fetch('http://localhost:8080/user/sign-in', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
                .then((res) => res.json())
                .then((response) => {

                    if(response.error){
                        throw Error()
                    }
                    else{
                        if (!response.token) {
                          return  makeToast("error", response.message);
    
                        }
                        
                         makeToast("success", response.message);
                        localStorage.setItem('token', response.token)
                        this.setState({
                            emailQuery:body.email,
                            bool:false
                        })
                        console.log("Login successfull");
                        // this.props.history.push('/home')
                        
                       
                        console.log(response.message, 'response.mes');
    
                    
                    }

                })
                .catch((error) => {
                    console.log(error);
                    // makeToast("error", error.response.message);
                })

        }

    }

    render() {
        return (
            <>
            {this.state.bool?(
                <div className='background'>
                
                <form
                    className="login-form"
                    onSubmit={this.handleSignIn}>
                    <h1 className="a11y-hidden">Login Form</h1>
                    <div>
                        <label className="label-email">
                            <input
                                type="email"
                                className="text"
                                name="email"
                                placeholder="Email"
                                required
                                value={this.state.email}
                                onChange={(event) => this.handleChange(event, 'email')}
                            />
                            <span className="required">Email</span>
                        </label>
                    </div>
                    <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" />
                    <label className="label-show-password" htmlFor="show-password">
                        <span>Show Password</span>
                    </label>
                    <div>
                        <label className="label-password">
                            <input
                                type="text"
                                className="text"
                                name="password"
                                placeholder="Password"
                                required
                                value={this.state.password}
                                onChange={(event) => this.handleChange(event, 'password')}
                            />
                            <span className="required">Password</span>
                        </label>
                    </div>
                        <input
                        type="submit"
                        value="Log In"
                    />
                    
                             

                   
                    <div className="email">
                        <a href="#">Forgot password?</a>
                    </div>
                    <figure aria-hidden="true">
                        <div className="person-body"></div>
                        <div className="neck skin"></div>
                        <div className="head skin">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                        <div className="hair"></div>
                        <div className="ears"></div>
                        <div className="shirt-1"></div>
                        <div className="shirt-2"></div>
                    </figure>
                </form>
                
            </div>
            ):
            <Home emailQuery={this.state.emailQuery} />
        }
            </>
            

        )
    }

}

export default SignIn