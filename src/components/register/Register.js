import React from 'react'
import '../signIn/SignIn.scss'




class Register extends React.Component {


    
    render() {
        return (
            <div className='background'>
 
                <form method="get"  id="login-form"  role="main">
                    <div>
                        <label className="label-email">
                            <input type="text"  name="Username" placeholder="Username"  required />
                            <span className="required">Username</span>
                        </label>
                    </div>
                    <div>
                        <label className="label-email">
                            <input type="email" className="text" name="email" placeholder="Email" required />
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
                            <input type="text" className="text" name="password" placeholder="Password" required />
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