import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const ViewNote = () => {
    const context = useContext(NoteContext);
    const note = context.manageNote;
    return (
        <div className="modal fade" id="viewNoteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">View Note</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='d-flex justify-content-between align-items-start gap-3'>
                            <h5>{note.title}</h5>
                            <span className='badge bg-primary'>{note.tag}</span>
                        </div>
                        <p className="card-text">{note.description}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewNote
