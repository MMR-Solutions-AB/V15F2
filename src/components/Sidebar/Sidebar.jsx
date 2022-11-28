import React from 'react'
import './Sidebar.scss'
import Links from '../Links/Links'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <p>All board ( 2 )</p>
            <Links />
        </div>
    )
}
