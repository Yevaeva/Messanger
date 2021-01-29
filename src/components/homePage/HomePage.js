import React from 'react'
import './HomePage.scss'
import { Link } from 'react-router-dom'
import SignIn from '../signIn/SignIn'
import logo from '../images/logo.png';



class HomePage extends React.Component {


    render() {
        return (
            <div className='background'>
                <main>
                    <img src={logo} alt="Logo" />
                    <div className='btnWrapper'>
                        <Link to='/register'
                            exact ='true'
                            className='register'>
                            <input type="submit" value="Register" />

                        </Link>
                        <Link to='/signin'
                            exact ='true'
                            className='signin'>
                            <input type="submit" value="Sign in" />
                        </Link>
                    </div>
                </main>
            </div>
        )
    }

}

export default HomePage