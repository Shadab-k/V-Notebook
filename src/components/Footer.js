import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>

            <footer className="py-3 my-5 mb-0 bg-dark text-white">
                <p className='d-flex justify-content-center font-italic font-weight-bold display-6'>Connect with us </p>

                <ul className=" nav justify-content-center  border-bottom pb-3 mb-3">

                    <Link to="https://www.instagram.com/accounts/login/" className="me-4 text-reset">
                        <i className="fab fa-lg fa-instagram"></i>
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <i className="fab fa-lg fa-facebook-f"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/mohd-shadab-khan-011992216" className="me-4 text-reset">
                        <i className="fab fa-lg fa-linkedin"></i>
                    </Link>
                    <Link to="https://github.com/Shadab-k" className="me-4 text-reset">
                        <i className="fab fa-lg fa-github"></i>
                    </Link>
                    <Link to="https://www.google.com/account/about/" className="me-4 text-reset">
                        <i className="fab fa-lg fa-google"></i>
                    </Link>


                    {/* <li className="nav-item "><Link to="/" className="nav-link text-white px-2"><CgInstagram />Insta</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link text-white px-2 ">Features</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link text-white px-2 ">Pricing</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link text-white px-2" >FAQs</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link text-white px-2 ">About</Link></li> */}
                </ul>

                <p className="text-center bg-dark ">© 2023 V-Notebook, Inc</p>

                <p className="text-center">


                    <a href="#"  >   Back to top</a ></p>

            </footer>
        </div >
    )
}

export default Footer
