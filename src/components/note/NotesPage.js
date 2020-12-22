import React, { useEffect, useRef } from 'react'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'
import {useDispatch, useSelector} from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';

export const NotesPage = () => {

    const dispatch = useDispatch();
    const {active: note} = useSelector( state => state.notes);
    const [ formValues, handleInutChange, reset] = useForm(note);
    const {body, title, id} = formValues;
    const activeId = useRef(note.id);

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);


    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}));
    }, [formValues, dispatch]);

    const handleDelete = () =>{
        dispatch(startDeleting(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    name="title"
                    value={title}
                    onChange={handleInutChange}
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInutChange}
                ></textarea>

                {
                    (note.url) 
                    &&
                    (
                    <div className="notes__image">
                        <img 
                            alt="Landscape"
                            src={note.url}
                        />
                    </div>
                    )
                }

            </div>

            <button 
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}
