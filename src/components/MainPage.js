import React, { useEffect, useState } from 'react';
import {connect} from'react-redux';
import {encode, decode} from 'js-base64';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMicrophone, faMicrophoneSlash} from '@fortawesome/free-solid-svg-icons';

import {setNotes} from '../redux/';
import fetchData from '../json/Data.json';
import heFlag from '../imgs/he_flag.png';
import enFlag from '../imgs/en_flag.png';

let updatingNotes;

const generateNote = (noteList, setNotes, setRerender, rerender, lang) => {
    const output = noteList.map((note, index) =>
        <tr>
            <td>
                <div dir="rtl" name={`card${index}`} className={`card ${note.editMode ? 'shadow-lg b' : ''}`} style={{ width: '18rem' }}>
                    <div className="card-body">
                        {note.editMode ? [
                            <input onClick={e => note.justOpened ? [e.target.focus(), e.target.select(), setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, justOpened: false} : note2))] : ''} className="text-center" style={{fontSize: '17px'}} defaultValue={note.title} onChange={e => setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, tempTitle: e.target.value} : note2 ))}/>,
                            <textarea id="textarea" onClick={e => e.target.value == fetchData[lang].strings[0] ? [e.target.focus(), e.target.select()] : ''} onFocus={e => resizeTextarea(e.target)} onBlur={e => resizeTextarea(e.target)} className="text-center" defaultValue={note.body} onChange={e => [resizeTextarea(e.target), setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, tempBody: e.target.value} : note2 ))]}></textarea>]
                            : [
                            <h5 className="card-title">{note.title}</h5>,
                            <p className="card-text" style={{whiteSpace: 'pre-wrap'}}>{note.body}</p>]
                        }
                        <div className="row justify-content-between">
                            {note.editMode ? [
                                <a className="btn btn-primary" style={{width: '40%'}} onClick={() => setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, title: note2.tempTitle, body: note2.tempBody, editMode: false, justOpened: false} : note2 ))}>{fetchData[lang].strings[1]}</a>,
                                <a className="btn btn-danger" style={{width: '40%'}} onClick={() => setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, editMode: false, justOpened: false} : note2 ))}>{fetchData[lang].strings[2]}</a>]
                                : [
                                <a className="btn btn-primary" style={{width: '40%'}} onClick={() => [setNotes(noteList.map((note2, index2) => index2 == index ? {...note2, tempTitle: note2.title, tempBody: note2.body, editMode: true, justOpened: true} : {...note2, title: note2.tempTitle != undefined ? note2.tempTitle : note2.title, body: note2.tempBody != undefined ? note2.tempBody : note2.body, editMode: false, justOpened: false} )), setTimeout(() => resizeTextarea(document.getElementById('textarea')), 0)]}>{fetchData[lang].strings[3]}</a>,
                                <a className="btn btn-danger" style={{width: '40%'}} onClick={() => [noteList.splice(index, 1), setNotes(noteList), setRerender(!rerender)]}>{fetchData[lang].strings[4]}</a>]
                            }
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    )
    return output;
}

function resizeTextarea(el){
    const windowEl = window.getComputedStyle(el);
    setTimeout(function(){
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + (17 + el.scrollHeight + parseInt(windowEl.getPropertyValue('border-top-width')) + parseInt(windowEl.getPropertyValue('padding-top')) + parseInt(windowEl.getPropertyValue('padding-bottom')) + parseInt(windowEl.getPropertyValue('border-bottom-width'))) + 'px';
    },0);
  }

const addNote = (notes, setNotes, setRerender, rerender, lang) => {
    let addNoteBool = true;
    notes = notes.map(note => {
        if(note.title == fetchData[lang].strings[0] && note.body == fetchData[lang].strings[0]) {
            addNoteBool = false;
            return {...note, editMode: true};
        } else {
            return note.editMode ? {...note, title: note.tempTitle, body: note.tempBody, editMode: false} : note;
        }
    });
    if(addNoteBool) {
        notes.push({title: fetchData[lang].strings[0], body: fetchData[lang].strings[0], tempTitle: fetchData[lang].strings[0], tempBody: fetchData[lang].strings[0], editMode: true, justOpened: true})
    }
    setRerender(!rerender);
    setNotes(notes);
}

function MainPage(props) {
    const [rerender, setRerender] = useState(false);
    const [lang, setLang] = useState();
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('notes')) {
            let tempNotes = localStorage.getItem('notes');
            tempNotes = decode(tempNotes);
            tempNotes = JSON.parse(tempNotes);
            props.setNotes(tempNotes);
        }


        if(localStorage.getItem('langauge')) {
            setLang(localStorage.getItem('langauge'));
        } else {
            localStorage.setItem('langauge', 'en-US');
            setLang('en-US');
        }
    }, []);

    useEffect(() => {
        updatingNotes = JSON.stringify(props.notes);
        updatingNotes = encode(updatingNotes);
        localStorage.setItem('notes', updatingNotes);
    });

    useEffect(() => {
        try {
            document.getElementsByName(`card${props.notes.length-1}`)[0].scrollIntoView({behavior: 'smooth'})
        }
        catch {

        }
    }, [rerender]);

    const changeLangauge = () => {
        const tempLang = lang == 'en-US' ? 'he' : 'en-US';
        props.setNotes(props.notes.map(note => (note.title == fetchData[lang].strings[0] && note.body == fetchData[lang].strings[0]) || (note.tempTitle == fetchData[lang].strings[0] && note.tempBody == fetchData[lang].strings[0]) ? {...note, title: fetchData[tempLang].strings[0], body: fetchData[tempLang].strings[0], tempTitle: fetchData[tempLang].strings[0], tempBody: fetchData[tempLang].strings[0], editMode: false} : {...note, editMode: false}));
        localStorage.setItem('langauge', tempLang);
        setLang(tempLang);
    }

    const {transcript, resetTranscript, listening} = useSpeechRecognition();

    useEffect(() => {
        if(editMode) {
            //code here
        } else {
            switch(transcript.toLowerCase()) {
                case 'make note':
                    addNote(props.notes, props.setNotes, setRerender, rerender, lang);
                    break;
            }
        }
    }, [transcript])

    return (
        <div className="text-center">
            {lang ?
            <div>
                <img type="button" onClick={changeLangauge} src={lang == 'en-US' ? enFlag : heFlag} className="position-absolute" style={{left: 0, zIndex: 1}}/>
                <a className={`position-absolute btn ${SpeechRecognition.browserSupportsSpeechRecognition() ? '' : 'disabled'} ${listening ? 'text-primary' : 'text-danger'}`} onClick={() => SpeechRecognition.startListening({language: lang})} style={{right: 0, transform: `translateX(${listening ? '-23%' : '0'})`}}><FontAwesomeIcon icon={listening ? faMicrophone : faMicrophoneSlash} size="3x" type="button" style={{zIndex: 1}} src={lang == 'en-US' ? enFlag : heFlag}/></a>
                <div className="btn btn-info my-2" onClick={() => addNote(props.notes, props.setNotes, setRerender, rerender, lang)}>{fetchData[lang].strings[0]}</div>
                <div className="btn btn-primary" onClick={() => SpeechRecognition.startListening({language: lang})}>start</div>
                <div className="btn btn-primary" onClick={() => SpeechRecognition.stopListening()}>stop</div>
                <div className="btn btn-primary" onClick={() => resetTranscript()}>reset</div>
                <div>{`text: ${transcript}`}</div>
                <table className="m-0 table justify-content-center row">
                    {generateNote(props.notes, props.setNotes, setRerender, rerender, lang)}
                </table>
            </div>
            
            :
            ''}

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