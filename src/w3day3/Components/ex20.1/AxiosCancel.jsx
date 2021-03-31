import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Api from './Api'

export default function AxiosCancel() {

    const [hide, setHide] = useState(false)

    const toggle = () => {
        setHide(!hide)
    }
    return (
        <div>
            <button onClick={toggle}>TOGGLE</button>

            {
                hide ? <div> <Api /></div> : null
            }
        </div>
    )
}
