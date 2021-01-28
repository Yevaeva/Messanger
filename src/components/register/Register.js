import React from 'react'
import '../signIn/SignIn.scss'




class Register extends React.Component {


    
    render() {
        return (
            <div className='background'>
 
                <form method="get"  id="login-form"  autocomplete="off" role="main">
                    <div>
                        <label className="label-email">
                            <input type="text"  name="name" placeholder="Name" tabindex="1" required />
                            <span className="required">Name</span>
                        </label>
                    </div>
                    <div>
                        <label className="label-email">
                            <input type="text" className="text" name="surname" placeholder="Surname" tabindex="1" required />
                            <span className="required">Surname</span>
                        </label>
                    </div>
                    <div>
                        <label className="label-email">
                            <input type="email" className="text" name="email" placeholder="Email" tabindex="1" required />
                            <span className="required">Email</span>
                        </label>
                    </div>
                    <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" tabindex="3" />
                    <label className="label-show-password" for="show-password">
                        <span>Show Password</span>
                    </label>
                    <div>
                        <label className="label-password">
                            <input type="text" className="text" name="password" placeholder="Password" tabindex="2" required />
                            <span className="required">Password</span>
                        </label>
                    </div>
                    <input type="submit" value="Sign up" />
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

export default Register