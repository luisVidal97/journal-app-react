import React from 'react'
import { NotesPage } from '../note/NotesPage'
import { SideBar } from './SideBar'
import {useSelector} from 'react-redux'
import { NothingSelected } from './NothingSelected'

export const JournalPage = () => {

    const { active} = useSelector( state => state.notes );

    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">

            <SideBar />
            <main>
                {
                    active?
                    <NotesPage />
                    :
                    <NothingSelected />
                }
               
                
            </main>
        </div>
    )
}