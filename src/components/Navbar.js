import React from 'react'
import { NavLink, Link, useNavigate} from 'react-router-dom'
import "./Navbar.css"



const Navbar = () => {
    let navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
  
    return (
        <nav className="navbar navbar-expand-lg Nav">
            <div className="container-fluid">
                <NavLink className="navbar-brand mx-4" to="/home">V-Notebook</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">ContactUs</NavLink>
                        </li>

                    </ul>
                 {!localStorage.getItem('token')?  <form className="d-flex" role="search">
                    <Link className="btn btn-success mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-warning mx-1" to="/signup" role="button">SignUp</Link>


                    </form>: <button onClick={handleLogout} className='btn btn-danger'>Logout</button>}
                </div>
            </div>
        
        </nav>
       
    )
}

export default Navbar
