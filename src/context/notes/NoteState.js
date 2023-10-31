import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    //Get all notes

    const getNotes = async () => {
        //API call
        const authToken = await localStorage.getItem('token');

       
       const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `Bearer ${authToken}` 
            }
        });
        

        const json = await response.json()
        console.log('json ', json)

        setNotes([...json])
        
    }

    //Add a Note
    const addNote = async (title,author, description, tag) => {
        //API call

        const authToken = localStorage.getItem('token');


        const response = await fetch(`${host}/api/notes/addnotes`,{        
        method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": await `Bearer ${authToken}` 
            },
            body: JSON.stringify({ title,author, description, tag })
        });
        
        
        // const response = await fetch(`${host}/api/notes/addnotes`, {
            //     method: "POST",
            
        //     headers: {
            //         "Content-Type": "application/json",
            //         "auth-token": localStorage.getItem('token')
            //     },
            
            // });
        const note = await response.json()
        setNotes(notes.concat(note))
       
    }

    //Delete a Note
    const deleteNote = async (id) => {
        // const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
        //     method: "DELETE",

        //     headers: {
        //         "Content-Type": "application/json",
        //         "auth-token": localStorage.getItem('token')
        //     }

        // });

        const authToken = localStorage.getItem('token');

        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": await `Bearer ${authToken}` 
            }
        });
        const json = response.json()
        console.log(json)
        console.log("Deleting node with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }

    //Edit a Note
    const editNote = async (id, title, author, description, tag) => {
        //API call
        const authToken = localStorage.getItem('token');


        const response =await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": await `Bearer ${authToken}` 
            },
            body: JSON.stringify({ title,author, description, tag }),

        });

        // const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        //     method: "PUT",

        //     headers: {
        //         "Content-Type": "application/json",
        //         "auth-token": localStorage.getItem('token')
        //     },

        //     body: JSON.stringify({ title, description, tag }),
        // });
        const json = await response.json()
        console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title
                newNotes[index].author = author
                newNotes[index].description = description
                newNotes[index].tag = tag
                break
            }

        }
        console.log(id, notes)
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, setNotes, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState