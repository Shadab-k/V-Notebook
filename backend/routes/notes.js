const express = require('express')
const router = express.Router()
const Note = require('../models/Notes')
var fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')


//Route:1 Get lall the notes using GET "/api/notes/fetchallnotes". login required

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id })

    res.json(notes)
})


//Route:2 Add a new note using POST "/api/notes/addnote". login required

router.post('/addnotes', fetchuser, [
    body('title', ' Please Enter  a Valid Type').isLength({ min: 3 }),
    body("description", 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // const notes = await Notes.find({ user: req.user.id })

    try {
        const { title, description, tag } = req.body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save()
        // const errors = validationResult(req)


        res.json(savedNote)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error ")
    }
})

//Route:3 Update an existing note using POST "/api/notes/updatenotes". login required

router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    // const notes = await Notes.find({ user: req.user.id })


    const { title, description, tag } = req.body
    //Create a newNote object
    const newNote = {}
    if (title) {
        newNote.title = title
    }
    if (description) {
        newNote.description = description
    }
    if (tag) {
        newNote.tag = tag
    }

    //Find the note to be updated and update it

    let note = await Note.findById(req.params.id)
    if (!note) {
        return res.status(404).send("Not found")
    }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed")
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note })



})

//Route:4 To Delete an existing note using DELETE "/api/notes/deletenotes". login required

router.delete('/deletenotes/:id', fetchuser, async (req, res) => {

    try {
        //Find the note to be deleted and delete it

        let note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not found")
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Sucess": "Note has been Deleted", note: note })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error ")
    }

})

module.exports = router