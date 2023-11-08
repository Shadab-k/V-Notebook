import React, { useState } from 'react';

const Contact = () => {
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        url: '',
        country: '',
        state: '',
        city: '',
        email: '',
        description: ''
    });

    const getUserdata = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value }); // Spread Operator
    };

    const postData = async (e) => {
        e.preventDefault();

        const { fname, lname, url, country, state, city, email, description } = user;

        if (fname && lname && url && country && state && city && email && description) {
            const res = await fetch('https://vnotebook-49d00-default-rtdb.firebaseio.com/VNotebook.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    url,
                    country,
                    state,
                    city,
                    email,
                    description
                })
            });
            if (res) {
                setUser({
                    fname: '',
                    lname: '',
                    url: '',
                    country: '',
                    state: '',
                    city: '',
                    email: '',
                    description: ''
                });
                alert('Your data has been stored successfully.');
            }
        } else {
            alert('Please fill in all the credentials properly.');
        }
    };

    return (
        <>
            <h1 className='d-flex justify-content-center'>Contact-Us</h1>
            {/* <h2  className='d-flex justify-content-center'>Contact-Us</h2> */}

            <div className="container mt-3">
                <form method='POST'  >
                    <div className="d-flex justify-content-center align-items-center mb-3 row">

                        <div className="col-sm-6 ">
                            <input
                                type="text"
                                className="form-control small-input"
                                value={user.fname}
                                name="fname"
                                id="fname"
                                placeholder="Your First Name..."
                                onChange={getUserdata}
                            />
                        </div>
                    </div>
                    {/* Repeat similar code for other form fields */}
                    <div className=" d-flex justify-content-center align-items-center mb-3 row">

                        <div className="col-sm-6">
                            <input type="text" className="form-control small-input" value={user.lname} name='lname' id="formGroupExampleInput2" placeholder="Your Last Name..." onChange={getUserdata} />
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center mb-3 row">

                        <div className="col-sm-6">
                            <input type="url" className="form-control small-input" value={user.url} name='url' id="formGroupExampleInput2" placeholder="LinkedIn Url..." onChange={getUserdata} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3 row">

                        <div className="d-flex justify-content-center align-items-center col-sm-6">
                            <input type="email" className="form-control small-input" name='email' id="exampleFormControlInput1" placeholder="name@example.com" value={user.email} onChange={getUserdata} />
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center mb-3 row">

                        <div className="col-sm-6">
                            <input type="text" className="form-control small-input" value={user.country} name='country' id="formGroupExampleInput2" placeholder="Country" onChange={getUserdata} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3 row">

                        <div className="col-sm-6">
                            <input type="text" className="form-control small-input" value={user.state} name='state' id="formGroupExampleInput2" placeholder="State" onChange={getUserdata} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3 row">


                        <div className="d-flex justify-content-center align-items-center col-sm-6">
                            <input type="text" className="form-control small-input" name='city' id="formGroupExampleInput2" placeholder="City" value={user.city} onChange={getUserdata} />
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center mb-3 row">

                        <div className="col-sm-6">
                            <textarea className="form-control small-input" name='description' placeholder='Write something...' id="exampleFormControlTextarea1" value={user.description} onChange={getUserdata} rows="5"></textarea>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="submit" onClick={postData} className="btn btn-primary ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default Contact;












































































































// import React,{useState} from 'react'

// const Contact = () => {
//     const [user, setUser] = useState({
//         fname: "",
//         lname: "",
//         url: "",
//         country: "",
//         state: "",
//         city: "",
//         email: "",
//         description: ""
//     });

//     let name, value
//     const getUserdata = (event) => {
//         name = event.target.name;
//         value = event.target.value;
//         setUser({ ...user, [name]: value })//Spread Operator
//     }

//     const postData = async (e) => {
//         e.preventDefault();

//         const { fname, lname, url, country,state,city, email, description } = user;

//         if ((fname && lname && url && country && state && city && email && description)) {



//             const res = await fetch('https://vnotebook-49d00-default-rtdb.firebaseio.com/VNotebook.json',
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         fname,
//                         lname,
//                         url,
//                         country,
//                         state,
//                         city,
//                         email,
//                         description
//                     })
//                 }
//             )
//             if (res) {
//                 setUser({
//                     fname: "",
//                     lname: "",
//                     url: "",
//                     country: "",
//                     state: "",
//                     city: "",
//                     email: "",
//                     description: ""

//                 })
//                 alert(" Your Data has been Stored to the User Successfully ...")
//             }
//         }
//         else {
//             alert("Please fill the all credentials properly")

//         }
//         return (
//             <>
//                 <form method="POST">
//                     <div className="mb-3  ">
//                         <label htmlFor="fname" className="form-label ">First Name</label>
//                         <input type="text" className="form-control " value={user.fname} name="fname" id="fname" placeholder="Your First Name..." onChange={getUserdata} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="formGroupExampleInput2" className="form-label">Last Name</label>
//                         <input type="text" className="form-control" value={user.lname} name='lname' id="formGroupExampleInput2" placeholder="Your Last Name..." onChange={getUserdata}/>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="formGroupExampleInput2" className="form-label">LinkedIn URL</label>
//                         <input type="url" className="form-control" value={user.url} name='url' id="formGroupExampleInput2" placeholder="Url..."onChange={getUserdata} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                         <input type="email" className="form-control" name='email' id="exampleFormControlInput1" placeholder="name@example.com" value={user.email}onChange={getUserdata} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="formGroupExampleInput2" className="form-label">Country</label>
//                         <input type="text" className="form-control" value={user.country}  name='country' id="formGroupExampleInput2" placeholder="..."onChange={getUserdata} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="formGroupExampleInput2" className="form-label">State</label>
//                         <input type="text" className="form-control" value={user.state} name='state' id="formGroupExampleInput2" placeholder="..." onChange={getUserdata}/>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="formGroupExampleInput2" className="form-label">City</label>
//                         <input type="text" className="form-control" name='city' id="formGroupExampleInput2" placeholder="..." value={user.city} onChange={getUserdata}/>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlTextarea1" className="form-label">About You</label>
//                         <textarea className="form-control" name='description' placeholder='Write something...' id="exampleFormControlTextarea1" value={user.description} onChange={getUserdata}rows="5"></textarea>
//                     </div>

//                     <button type="submit" className="my-3 btn btn-outline-primary">Submit</button>
//                 </form>
//             </>

//         )
//     }
// }

// export default Contact
