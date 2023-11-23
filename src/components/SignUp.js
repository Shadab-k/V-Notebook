import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password,cpassword } = credentials
        const response = await fetch("https://notebook-backend-a9ln.onrender.com/api/auth/createuser", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ name, email, password, cpassword })


        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //Save the authToken and redirect 
            localStorage.setItem('token', json.authToken)
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






































































































// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// const SignUp = (props) => {
//     const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
//     let navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const { name, email, password } = credentials
//         const response = await fetch("http://localhost:5000/api/auth/createuser", {
//             method: "POST",

//             headers: {
//                 "Content-Type": "application/json",

//             },
//             body: JSON.stringify({ name, email, password })


//         });
//         const json = await response.json()
//         console.log(json)
//         if (json.success) {
//             //Save the authToken and redirect \
//             localStorage.setItem('token', json.authtoken)
//             navigate("/home")
//             props.showAlert("Account Created Successfully", "Success")

//         }
//         else {
//             props.showAlert("Invalid Credentials", "danger") 
//         }
//     }
//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };
//     return (
//         <div className='container my-3'>
//         <h1 className='my-4'>SignUp to view your VNotebook</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label"> Full Name</label>
//                     <input type="text" className="form-control" onChange={onChange} id="name" name="name" aria-describedby="emailHelp" minLength={5} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" className="form-control" onChange={onChange} name="email" id="email" aria-describedby="emailHelp" minLength={5} required />
//                 </div>
//                 <div class="mb-3">
//                     <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//                     <input type="password" className="form-control" name='cpassword' onChange={onChange} id="cpassword" minLength={5} required />
//                 </div>
//                 <div class="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" name='password' onChange={onChange} id="password" minLength={5} required />
//                 </div>


//                 <button type="submit" className="btn btn-primary">Create account</button>
//             </form>    </div>
//     )
// }

// export default SignUp

// <div className='container my-3'>
// <h1 className='my-4  d-flex justify-content-center'>SignUp to view your VNotebook</h1>
// {/* <form onSubmit={handleSubmit}> */}
//     <div className="container mt-2">
//         <form method="POST" className="text-center">
//             <div className="mb-3 row d-flex justify-content-center">
//                 {/* <label htmlFor="name" className=" col-sm-2 col-form-label">Full Name</label> */}
//                 <div className="col-sm-5">
//                     <input type="text" className="form-control" onChange={onChange} id="name" name="name" placeholder="Your Name..."minLength={5} required />
//                 </div>
//             </div>
//             <div className="mb-3 row row d-flex justify-content-center">
//                 {/* <label htmlFor="email" className="col-sm-2 col-form-label">Email address</label> */}
//                 <div className="col-sm-5">
//                     <input type="email"placeholder="name123@example.com" className="form-control" onChange={onChange} name="email" id="email" minLength={5} required />
//                 </div>
//             </div>
//             <div class="mb-3 row d-flex justify-content-center">
//                 {/* <label htmlFor="password" className="col-sm-2 col-form-label">Password</label> */}
//                 <div className="col-sm-5">
//                     <input type="password"placeholder="Password..." className="form-control" name='password' onChange={onChange} id="password" minLength={5} required />
//                 </div>
//             </div>
//             <div class="mb-3 row d-flex justify-content-center">
//                 {/* <label htmlFor="cpassword" className="col-sm-2 col-form-label">Confirm Password</label> */}
//                 <div className="col-sm-5">
//                     <input type="password"placeholder="Confirm Password ..." className="form-control" name='cpassword' onChange={onChange} id="cpassword" minLength={5} required />
//                 </div>
//             </div>

//             <button type="submit" onClick={handleSubmit} className="btn btn-primary">Create account</button>
//         </form>
//     </div>
// {/* </form> */}
// </div>
