import React, { useContext, useEffect, useRef, useState } from 'react';
import Notecontext from '../context/notes/NoteContext';


const NoteItem = (props) => {
    const colRef = useRef();

    const [cardLength, setCardLength] = useState(30);
    useEffect(() => {
        setCardLength(colRef.current.clientWidth / 10);
    }, [colRef])

    const context = useContext(Notecontext)
    const { deleteNote, setManageNote } = context;
    const { id, title, description, tag } = props.note;

    const handleNoteDelete = (noteId) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Are you sure want to delete the note?")) {
            deleteNote(noteId);
        }
    }

    const handleNoteEdit = (note) => {
        setManageNote({ ...note, modalTitle: "Edit Note" });
    }

    const handlViewNote = (note) => {
        setManageNote({ ...note })
    }
    return (
        <div ref={colRef} className="col-sm-6 col-md-4 my-3">
            <div className="card">
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-start gap-3'>
                        <h5 className="card-title">{title}</h5>
                        <span className='badge bg-primary'>{tag}</span>
                    </div>

                    <p className="card-text">{description.length > cardLength ? description.substr(0, cardLength) + "..." : description}</p>
                    <i title='View note' className="text-dark fas fa-eye mx-2" data-bs-toggle="modal" data-bs-target="#viewNoteModal" onClick={() => handlViewNote(props.note)}></i>
                    <i title='Edit note' className="text-success fas fa-edit mx-2" onClick={() => handleNoteEdit(props.note)} data-bs-toggle="modal" data-bs-target="#manageNoteModal"></i>
                    <i title='Delete note' className="text-danger fas fa-trash-alt mx-2" onClick={() => handleNoteDelete(id)}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;