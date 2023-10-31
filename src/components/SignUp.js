import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ name, email, password })


        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //Save the authToken and redirect \
            localStorage.setItem('token', json.authtoken)
            navigate("/home")
            props.showAlert("Account Created Successfully", "Success")

        }
        else {
            props.showAlert("Invalid Credentials", "danger") 
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div className='container my-3'>
        <h1 className='my-4'>SignUp to view your VNotebook</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Full Name</label>
                    <input type="text" className="form-control" onChange={onChange} id="name" name="name" aria-describedby="emailHelp" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} name="email" id="email" aria-describedby="emailHelp" minLength={5} required />
                </div>
                <div class="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='cpassword' onChange={onChange} id="cpassword" minLength={5} required />
                </div>
                <div class="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' onChange={onChange} id="password" minLength={5} required />
                </div>


                <button type="submit" className="btn btn-primary">Signup</button>
            </form>    </div>
    )
}

export default SignUp
