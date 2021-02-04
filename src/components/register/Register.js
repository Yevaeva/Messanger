import React from 'react'
import '../signIn/SignIn.scss'
import makeToast from "../toaster";





class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            surname: ''
        }
    }

    handleChange = (event, type) => {
        this.setState({
            [type]: event.target.value,
        })
    }

    handleSignUp = (event) => {
        event.preventDefault()
        let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let { email, password, name, surname } = this.state

        if (regexp.test(email) && password.length > 4) {
            let body =
            {
                email,
                password,
                name,
                surname
            }
            fetch('http://localhost:8080/user/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
                .then((res) => res.json())
                .then((response) => {
                    if (response.error) {
                        throw response.error
                    }
                    if (response.error) {
                        console.log(response.error.message, '----response.mes');
                    }
                    else {

                        console.log("Successfull registration");
                        makeToast("success", response.message);
                        this.props.history.push('/home')

                    }
                   

                })
                .catch((error) => {
                    // makeToast("error", error.response.message);
                    console.log(error);
                })

        } else {
            alert('password must be gt 5')
        }

    }


    render() {
        return (
            <div className='background'>

                <form
                    onSubmit={this.handleSignUp} >
                    <div>
                        <label className="label-email">
                            <input
                                type="text"
                                name="Name"
                                placeholder="Name"
                                required
                                value={this.state.name}
                                onChange={(event) => this.handleChange(event, 'name')} />
                            <span className="required">Name</span>
                        </label>
                    </div>
                    <div>
                        <label className="label-email">
                            <input
                                type="text"
                                name="Surname"
                                placeholder="Surname"
                                required
                                value={this.state.surname}
                                onChange={(event) => this.handleChange(event, 'surname')} />
                            <span className="required">Surname</span>
                        </label>
                    </div>
                    <div>
                        <label className="label-email">
                            <input
                                type="email"
                                className="text"
                                name="email"
                                placeholder="Email"
                                required
                                value={this.state.email}
                                onChange={(event) => this.handleChange(event, 'email')} />
                            <span className="required">Email</span>
                        </label>
                    </div>
                    <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password"
                    />
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
                                onChange={(event) => this.handleChange(event, 'password')} />
                            <span className="required">Password</span>
                        </label>
                    </div>
                    <input type="submit" value="Sign up" />
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

export default Register