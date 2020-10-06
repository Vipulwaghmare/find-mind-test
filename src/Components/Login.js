import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        email: "abcd@gmail.com",
        password: '',
        error: '',
        redirect: false,
        success: false
    })

    const {email, password, error, redirect} = values

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const LinkTOTask = () => {
        return(
            redirect &&
            <Redirect to="/main" />
        )
    }

    const errorMessage = () => {
        return (
            error &&
            <div className="error-message">
                {error}
            </div>
        )
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let signup_data = JSON.parse(localStorage.getItem('signup_data'))
        
         if(signup_data){signup_data.map(id => {
            if(email === id.email && password === id.password){
                setValues({
                    ...values,
                    redirect: true,
                    error: ""
                })
            } else {
                setValues({
                    ...values,
                    error: "No user found",
                    password: ''
                })
            }
        })} else {
            setValues({
                ...values,
                error: "Please register before logging in"
            })
        }
    }

    return(
        <div className="login-main">
        <h1 className="login-title">Log in!</h1>
        {errorMessage()}
        {redirect}
        <form className="login-form">
            <fieldset className="login-fieldset">
                <legend 
                    className="login-legend"
                > Email Address</legend>
                <input 
                    type="email"
                    name='email'
                    className="login-input"
                    value={email}   
                    onChange={handleChange} 
                />
            </fieldset>
            <fieldset>
                <legend
                    className="login-legend"
                > Password </legend>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    className="login-input"
                    placeholder="Enter password"
                    onChange={handleChange}
                />
            </fieldset>
            <div className="login-end">
                <div>
                <input 
                    type="checkbox"
                /> <span className="login-end-span">Remember me</span>
                </div>
                <div>
                    Forgot Password?
                </div>
            </div>
            <input
                className="login-submit" 
                type="Submit"
                value="Log in"
                onClick={onSubmit}
            />
        </form>
        {LinkTOTask()}
        </div>
    )
}

export default Login
