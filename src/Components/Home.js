import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="home">
            <div className="first">
            <Link className="first-link" to="/signup">
                Sign UP
            </Link>
            <Link className="first-link" to="/login">
                Log In
            </Link>
            </div>
            <div className="second">
                Signup and Login to go to TaskBoard
            </div>
        </div>
    )
}

export default Home