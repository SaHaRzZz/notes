import React, { useEffect, useState } from 'react';
import {connect} from'react-redux';
import {encode, decode} from 'js-base64';

import {setNotes} from '../redux/';

let updatingNotes;

const generateNote = (noteList, setNotes, setRerender, rerender) => {
    const output = noteList.map((note, index) =>
        <tr>
            <td>
                <div name={`card${index}`} className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        {note.editMode ? [
                            <input className="text-center" style={{fontSize: '19px'}} defaultValue={note.title} onChange={e => setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, tempTitle: e.target.value} : note2 ))}/>,
                            <textarea className="text-center" defaultValue={note.body} onChange={e => setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, tempBody: e.target.value} : note2 ))}></textarea>]
                            : [
                            <h5 className="card-title">{note.title}</h5>,
                            <p className="card-text" style={{whiteSpace: 'pre-wrap'}}>{note.body}</p>]
                        }
                        <div className="row justify-content-between">
                            {note.editMode ? [
                                <a className="btn btn-primary" style={{width: '40%'}} onClick={() => setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, title: note2.tempTitle, body: note2.tempBody, editMode: false} : note2 ))}>Save</a>,
                                <a className="btn btn-danger" style={{width: '40%'}} onClick={() => setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, editMode: false} : note2 ))}>Cancel</a>]
                                : [
                                <a className="btn btn-primary" style={{width: '40%'}} onClick={() => setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, tempTitle: note2.title, tempBody: note2.body, editMode: true} : {...note2, title: note2.tempTitle != undefined ? note2.tempTitle : note2.title, body: note2.tempBody != undefined ? note2.tempBody : note2.body, editMode: false} ))}>Edit</a>,
                                <a className="btn btn-danger" style={{width: '40%'}} onClick={() => [noteList.splice(index, 1), setNotes(noteList), setRerender(!rerender)]}>Delete</a>]
                            }
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    )
    return output;
}

const addNote = (notes, setNotes, setRerender, rerender) => {
    notes = notes.map(note => note.editMode ? {...note, title: note.tempTitle, body: note.tempBody, editMode: false} : note);
    notes.push({title: 'New note', body: '', tempTitle: 'New note', editMode: true})
    setRerender(!rerender);
    setNotes(notes);
}

function MainPage(props) {
    const [rerender, setRerender] = useState(false);
    useEffect(() => {
        if(localStorage.getItem('snotes-notes')) {
            let tempNotes = localStorage.getItem('snotes-notes');
            console.log('first:', Object.values(tempNotes));
            tempNotes = decode(tempNotes);
            tempNotes = JSON.parse(tempNotes);
            props.setNotes(tempNotes);
        } else {
            localStorage.setItem('snotes-notes', '+exװ^nrN+exװ^yح2^')
            console.log('this');
        }
    }, []);

    useEffect(() => {
        updatingNotes = JSON.stringify(props.notes);
        updatingNotes = encode(updatingNotes);
        localStorage.setItem('snotes-notes', updatingNotes);
        console.log('set');
    });

    useEffect(() => {
        try {
            document.getElementsByName(`card${props.notes.length-1}`)[0].scrollIntoView({behavior: 'smooth'})
        }
        catch {

        }
    }, [rerender]);
    
    return (
        <div className="text-center">
            <div className="btn btn-info my-2" onClick={() => addNote(props.notes, props.setNotes, setRerender, rerender)}>New note</div>
            <table className="m-0 table justify-content-center row">
                {generateNote(props.notes, props.setNotes, setRerender, rerender)}
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notes: state.general.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNotes: val => dispatch(setNotes(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);