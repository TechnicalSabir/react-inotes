import React, { useContext, useEffect, useState } from 'react';
import Notecontext from '../context/notes/NoteContext';
import NoteItem from "../components/NoteItem";
import ManageNote from "../components/ManageNote";
import ViewNote from "../components/ViewNote";

const Home = (props) => {
    const context = useContext(Notecontext);
    const { notes, setManageNote } = context;

    const handleAddNote = () => {
        setManageNote({ id: "", title: "", tag: "", description: "", modalTitle: "Add Note" });
    }

    return (
        <div className="">
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className=''>Your notes</h3>
                <button onClick={handleAddNote} data-bs-toggle="modal" data-bs-target="#manageNoteModal" className='btn btn-success btn-sm'><i className='fa fa-plus'></i> Add new</button>
            </div>
            {notes.length === 0 && 'There is nothing to visible.'}
            <div className='row'>
                {notes.map((note) => {
                    return <NoteItem key={note.id} note={note} />

                })}
            </div>
            <ManageNote />
            <ViewNote />
        </div>
    )
}
export default Home;

