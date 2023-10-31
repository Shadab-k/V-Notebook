import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext);

    const { addNote } = context;
    const [note, setNote] = useState({
        title: '',
        author:'',
        description: '',
        tag: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title,note.author, note.description, note.tag);
        setNote({ title: '', author:'',description: '', tag: '' }); // Clear the input fields after submitting
        props.showAlert("Note Added Successfully", "Success")

    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-3">
            <h2>Add a new book</h2>
            <form className="my-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={note.title}
                        onChange={onChange}
                        minLength={5}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="author" className="form-label">
                        Author Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={note.author}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Summary
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={note.description}
                        onChange={onChange}
                        minLength={5}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                        tag
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name="tag"
                        value={note.tag}
                        onChange={onChange}
                        minLength={5}
                        required
                    />
                </div>
           
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary">
                   Add Your Book
                </button>
            </form>
        </div>
    );
};

export default AddNote;

























































































// import React, { useContext, useState } from 'react'
// import noteContext from '../context/notes/noteContext'

// const AddNote = () => {
//     const context = useContext(noteContext)

//     const { addNote } = context
//     const [note, setNote] = useState({
//         title: "",
//         description: "",
//         tag: ""
//     })
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         addNote(note)
//     }


//     const onChange = (e) => {
//         setNote({ ...note, [e.target.name]: e.target.value })
//     }

//     return (
//         <div className="container my-3">
//             <h2>Add a Note</h2>
//             <form className='my-3'>
//                 <div className="mb-3">
//                     <label htmlFor="title" className="form-label">Title</label>
//                     <input type="text" className="form-control" id="title" name='title' onChange={onChange} aria-describedby="emailHelp" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={onChange} />
//                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary" onClick={handleSubmit()}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default AddNote
