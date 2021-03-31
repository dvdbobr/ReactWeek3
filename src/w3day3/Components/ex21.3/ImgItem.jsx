import React, { useState, useRef } from 'react'

export default function ImgItem(props) {
    const picRef = useRef()
    const [hover, setHover] = useState(false)
    const toggleHover = () => {
        setHover(!hover)
    }
    return (

            <img
                ref={picRef}
                className={hover ? "coloredStyle" : "grayStyle"}
                src={props.src} alt=""
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            />

    )
}
