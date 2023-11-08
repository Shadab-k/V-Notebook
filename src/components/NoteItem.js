import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex flex-column align-items-start'>
                        <div className="d-flex justify-content-between w-100">
                            <h5 className="card-title ">{note.title}</h5>
                            <div>
                                <i
                                    className="fa-solid fa-trash-can mx-2"
                                    onClick={() => {
                                        deleteNote(note._id);
                                        props.showAlert("Deleted Note Successfully", "Success");
                                    }}
                                ></i>
                                <i
                                    className="fa-solid fa-pen-to-square mx-2"
                                    onClick={() => {
                                        updateNote(note);
                                    }}
                                ></i>
                            </div>
                        </div>
                        <h6 className="card-title">{note.author}</h6>
                        <p className="card-text">tag: {note.tag}</p>
                        <p className="card-text"> {note.description}</p>
          

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;