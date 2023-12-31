import React, { useContext, useState, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Notes = (props) => {
    const context = useContext(noteContext)

    const { notes, getNotes, editNote } = context
    let navigate = useNavigate()

    useEffect(() => {
        handleData()
        // eslint-disable-next-line
    }, [])



    const handleData = async () => {
        const token = await localStorage.getItem('token')
        // console.log('token ', token)
        if (token) {
            // console.log('auth-token ', token)
            getNotes()
        }
        else {
            navigate("/login")
        }

    }
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({
        id: "",
        etitle: '',
        eauthor: '',
        edescription: '',
        etag: '',
    });

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, eauthor: currentNote.author, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        refClose.current.click()
        editNote(note.id, note.etitle, note.eauthor, note.edescription, note.etag)
        props.showAlert("Updated Note Successfully", "Success")


        // setNote({ title: '', description: '', tag: '' })
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Note
            </button>

            <div className="modal fade home" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note Here ...</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="etitle"
                                        name="etitle"
                                        value={note.etitle}
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
                                        id="eauthor"
                                        name="eauthor"
                                        value={note.eauthor}
                                        onChange={onChange}
                                        minLength={5}
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
                                        id="edescription"
                                        name="edescription"
                                        value={note.edescription}
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
                                        id="etag"
                                        name="etag"
                                        value={note.etag}
                                        onChange={onChange}
                                    />
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleSubmit} type="button" className="btn btn-primary">Update Book</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2  className="mx-3 d-flex justify-content-center">
                    Your V-Books</h2>
                <div className="container mx-2">
                    {notes.length === 0 && "No notes to display"}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
                })}
            </div>

            
        </>
    )
}

export default Notes
