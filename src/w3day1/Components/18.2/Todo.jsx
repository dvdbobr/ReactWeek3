import React, { useState } from 'react'

export default function Todo() {
    const [data, setData] = useState([
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ])
    function toggleCheck(index) {
        const newData=[...data]
        newData[index].completed=!newData[index].completed
        setData(newData);
    }
    return (
        <div>
            {data.map((data, index) => {
                return <h2 onClick={() => { toggleCheck(index) }} key={index} style={{ textAlign: 'center' }}>
                    <span >{data.completed ?
                        <span><del>{data.name}</del> <span >&#10003;</span></span> :
                        <span>{data.name}<span> &#x58;</span> </span>}
                    </span>
                </h2>
            })}
        </div>
    )
}
