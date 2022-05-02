import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import './ButtonProfile.css'

export default function ButtonProfile() {

    return (
        <div className='profile-icon-container mobile' >
            <FaRegUser className="icon" />
            Mi Cuenta
        </div>
    )
}