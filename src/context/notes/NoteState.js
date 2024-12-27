import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const initialNotes = localStorage.getItem("notes");
    const [notes, setnotes] = useState(initialNotes ? JSON.parse(initialNotes) : []);

    const [manageNote, setManageNote] = useState({ id: "", title: "", tag: "", description: "", modalTitle: "Add Note" });

    const [alertState, setAlertState] = useState(null);

    //add a note
    const addNote = (note) => {
        const newNote = {
            id: (Math.random() + 1).toString(36).substring(2),
            title: note.title,
            tag: note.tag,
            description: note.description
        };
        const allNotes = notes;
        allNotes.push(newNote);
        setnotes([...allNotes]);
        localStorage.setItem("notes", JSON.stringify(allNotes));
        showAlert("success", "Note added.");
    }

    //delete a note
    const deleteNote = (id) => {
        let noteIndex = notes.findIndex((note) => {
            return note.id === id;
        });
        if (noteIndex > -1) {
            const allNotes = notes;
            allNotes.splice(noteIndex, 1);
            setnotes([...allNotes]);
            localStorage.setItem("notes", JSON.stringify(allNotes));
            showAlert("success", "Note deleted.");
        } else {
            showAlert("danger", "No note found with the associated id.");
        }

    }

    //edit a note
    const editNote = (note) => {
        //define ajax function for using api call
        const noteIndex = notes.findIndex((obj) => {
            return obj.id === note.id;
        })
        if (noteIndex > -1) {
            const allNotes = notes;
            allNotes[noteIndex] = { id: note.id, title: note.title, tag: note.tag, description: note.description };
            setnotes(allNotes);
            localStorage.setItem("notes", JSON.stringify(allNotes));
            showAlert("success", "Note updated.");
        } else {
            showAlert("danger", "No note found with the associated id.");
        }
    }

    const showAlert = (type, message) => {
        console.log("showAlert function called")
        setAlertState({ type, message });
        setTimeout(() => {
            setAlertState(null)
        }, 5000);
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, alertState, showAlert, manageNote, setManageNote }}>
            {props.children}
        </NoteContext.Provider>
    )


}

export default NoteState;