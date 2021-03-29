import React, { useState } from 'react'

export default function ReadMore({ children, maxCharacterCount = 100 }) {
    const text = children
    const [isReadMore, setIsReadMore] = useState(true)
    const resultString = isReadMore ? text.slice(0, maxCharacterCount) : text
    function toggleIsReadMore() {
        setIsReadMore(!isReadMore)
    }
    return (
        <div style={{fontSize:"1.6rem",margin:"2rem 5rem"}}>
            {resultString}...
            <span style={{color:"blue",cursor:"pointer"}} onClick={toggleIsReadMore}>
                {isReadMore ? "Read More" : "Read Less"}
            </span>
        </div>
    )
}
