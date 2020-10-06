import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [values, setValues] = useState({
        username: '',
        email: "abcd@gmail.com",
        password: '',
        tnc: false, // Terms and conditions box
        error: '',
        success: ''
    })

    const {username, email, password, tnc, error, success} = values

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!username || !email || ! password){
            setValues({...values, error: "Please include all fields"})
        } else {
        if(!tnc){
            setValues({...values, error: "Please agree to terms and conditions"})
        } else {
            let data = {
                username: values.username,
                email: values.email,
                password: password
            }
            let signup_data = JSON.parse(localStorage.getItem("signup_data"))
            if(!signup_data){
                let newData = []
                newData.push(data)
                localStorage.setItem('signup_data', JSON.stringify(newData))
            } else {
                let oldData = signup_data
                oldData.push(data)
                localStorage.setItem('signup_data',JSON.stringify(signup_data))
            }
            setValues({
                ...values,
                username: '',
                email: "abcd@gmail.com",
                password: '',
                error: '',
                success: 'Account Created'
            })
        }
    }
    }

    const errorMessage = () => {
        return(
            error && 
            <div className="error-message">
                {error}
            </div>
        )
    }

    const successMessage = () => {
        return(
            success && 
            <div className="success-message">
                {success}! Log in 
                <Link className="success-message" to="/login"> Here</Link>
            </div>
        )
    }

    return(
        <div className="login-main">
        <h1 className="login-title">Sign up</h1>
        {errorMessage()}
        {successMessage()}
        <form className="login-form">
            <fieldset>
                <legend 
                    className="login-legend"
                > Username </legend>
                <input 
                    type="text"
                    name='username'
                    className="login-input"
                    value={username}   
                    placeholder="Enter Name"
                    onChange={handleChange} 
                    required
                />
            </fieldset>
            <fieldset>
                <legend 
                    className="login-legend"
                > Email Address</legend>
                <input 
                    type="email"
                    name='email'
                    className="login-input"
                    value={email}   
                    onChange={handleChange} 
                    required
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
                    required
                />
            </fieldset>
            <div className="login-end">
                <div>
                <input 
                    type="checkbox"
                    className="login-checkbox"
                    onChange={()=>{
                        setValues({...values, tnc: !tnc})
                    }}
                /><span className="login-end-span">I accept the terms & conditions</span>
                </div>
            </div>
            <input
                className="login-submit" 
                type="Submit"
                value="Sign up"
                onClick={onSubmit}
            />
        </form>
        </div>
    )
}

export default Signup
