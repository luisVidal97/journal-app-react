import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {startSaveNote, startUploading} from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active: note} = useSelector(state => state.notes)

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
            <span>28 of august 2020</span>

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
