import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Articles() {
    const [term, setTerm] = useState('hooks')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        try {
            const search = async () => {
                const result = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`)
                console.log(result.data);
                setData(result.data)
                setLoading(false)
            }
            search()
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }

    }, [])
    const handleInput = (e) => {
        setTerm(e.target.value)
    }
    const searchApi = async () => {
        try {
            const result = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`)
            setData(result.data)
            console.log(result.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <input type="text" onChange={handleInput} />
            <button onClick={searchApi}>SEARCH</button>

            {
                loading ? <div style={{fontSize:"5rem"}}>Loading...</div> :
                    <ul>
                        {
                            data.hits.map((a,index) => {
                                return <li key={index}> <a href={a.url}> {a.title}</a></li>
                            })
                        }
                    </ul>
            }

        </div>
    )
}
