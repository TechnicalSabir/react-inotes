import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

export default function Alert() {
    const context = useContext(NoteContext);
    const {alertState} = context;
    console.log()
    const capitalize = (word) => {
        if (word === "danger") {
            word = "Error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ position: 'fixed', bottom: "80px", right: "20px", zIndex: 999 }}>
            {alertState &&
                <div className={`alert m-0 py-2 alert-${alertState.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(alertState.type)}: </strong> {alertState.message}
                </div>}
        </div>
    )
}