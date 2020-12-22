import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {startSaveNote, startUploading} from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active: note} = useSelector(state => state.notes);
    const noteDate = moment(note.date);

    const fileInput = useRef(null);

    const handleSave = () =>{
        dispatch(startSaveNote(note));
    }

    const handlePiture = () =>{
        // document.querySelector('#fileSelector').click();
        fileInput.current.click();
    }

    const handleFileChange = (e) =>{
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('MMMM Do YYYY, h:mm:ss a')}</span>

            <input
                id="fileSelector"
                ref={fileInput}
                type="file"
                name="file"
                style={{display: 'none'}}
                onChange={handleFileChange}
            />

            <div>
                <button className="btn" onClick={handlePiture}>
                    Picture
                </button>
                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
