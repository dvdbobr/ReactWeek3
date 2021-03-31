import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Api() {
    const [data, setData] = useState('')
    useEffect(() => {
        let source=axios.CancelToken.source();
        const loadData = async () => {
            const response = await axios.get('https://api.chucknorris.io/jokes/random',{
                cancelToken: source.token
            })
            setData(response.data);
        }
        loadData();
        return (()=>{
            source.cancel()
        })
    }, [])


    return (
        <div> {JSON.stringify(data)}</div>
    )
}

