import React from 'react'
import './SignIn.scss'





class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event, type) => {
        this.setState({
            [type]: event.target.value,
        })
    }

    handleClick = (event) => {
        let r = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (r.test(this.state.email)) {
            let body = JSON.stringify({ ...this.state })

            fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: body
            })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }
                console.log(response);
                //if (response.data.code == 200) {
                //             console.log("Login successfull");
                //         }
                //         else if (response.data.code == 204) {
                //             console.log("Username password do not match");
                //             alert("username password do not match")
                //         }
                //         else {
                //             console.log("Username does not exists");
                //             alert("Username does not exist");
                //         }
            })
            .catch((error) => {
                console.log(error);
            })

        }
         
    }

    render() {
        return (
            <div className='background'>
                <form className="login-form" >
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
                        onClick={(event) => this.handleClick(event)} />
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

        )
    }

}

export default SignIn