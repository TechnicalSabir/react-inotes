import React, { useContext, useEffect, useRef, useState } from 'react';
import Notecontext from '../context/notes/NoteContext';

const ManageNote = (props) => {
    const modalCloseRef = useRef();
    const context = useContext(Notecontext);
    const { addNote, editNote, manageNote, setManageNote } = context;

    const noteManageProcess = (e) => {
        e.preventDefault();

        if(manageNote.id !== ""){
            editNote(manageNote);
        }else{
            addNote(manageNote);
        }
        setManageNote({ ...manageNote, title: "", description: "", tag: "" });
        modalCloseRef.current.click();
    }
    const onChange = (e) => {
        setManageNote({ ...manageNote, [e.target.name]: e.target.value });
    }
    return (
        <div className="modal fade" id="manageNoteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{manageNote.modalTitle}</h1>
                        <button ref={modalCloseRef} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form method='post' onSubmit={noteManageProcess}>
                        <input type='hidden' name='id' value={manageNote.id} />
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Note title <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control" name="title" value={manageNote.title} placeholder="Enter the note title" onChange={onChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tag</label>
                                <input type="text" className="form-control" name="tag" value={manageNote.tag} placeholder="Enter the note tag" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea type="text" className="form-control" name="description" placeholder="Enter the note description" onChange={onChange} value={manageNote.description} ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-sm btn-success">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManageNote