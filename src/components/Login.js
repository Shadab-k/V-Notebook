import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "", })
    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        try{
        e.preventDefault()
        const response = await fetch("https://notebook-backend-a9ln.onrender.com/api/auth/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })


        });
        const json = await response.json()
        // console.log(json)

        if (json.success) {
            //Save the authToken and redirect \
            localStorage.setItem('token', json.authToken)
            props.showAlert("Logged in Successfully", "Success")
            navigate("/home")


        }
        else {
            props.showAlert("Invalid details", "danger")
        }
    }
    catch(error){
        console.log('error',error)
    }    
}


        const onChange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value });
        };
        return (
            <div className='container d-flex justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <h1 className="my-3 text-dark">Login to continue to VNotebook</h1>
                        <label htmlFor="Email" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={onChange} id="email" name="email" value={credentials.email} aria-describedby="emailHelp" />
                        <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={onChange} value={credentials.password} name='password' id="password" />
                    </div>
                    <button type="submit" className="my-3 btn btn-primary">Login</button>
                </form>
            </div>
        )
    }

export default Login
