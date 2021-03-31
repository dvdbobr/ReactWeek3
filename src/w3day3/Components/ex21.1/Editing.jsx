import React, { useState, useEffect, useRef } from 'react'

export default function Editing() {
    const ref = useRef()
    const [show, setShow] = useState(true)
    useEffect(() => {
        if (!show)
            ref.current.focus()

    }, [show])
    const handleEdit = () => {

        setShow(!show)
    }
    const handleSave = () => {
        setShow(!show)
        ref.current.value = ''
    }
    return (
        <div>

            {
                show ? <button onClick={handleEdit}>edit</button> :
                    <div>
                        <input type="text" ref={ref} />
                        <button onClick={handleSave}>save</button>
                    </div>
            }
        </div>
    )
}
