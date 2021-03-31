import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AxiosCancel() {
    const [data, setData] = useState('')
    const [mount, setMount] = useState(true)
    const [hide, setHide] = useState(false)
    useEffect(() => {
        let source = axios.CancelToken.source();
        setTimeout(async () => {

            setMount(false)
        }, 2000)

        const loadData =async () => {
            // try {
            
                const response = await axios.get('https://swapi.dev/api/people/', {
                    // cancelToken: source.token
                })
                setData(response.data);


            // } catch (error) {
            //     if (axios.isCancel(error)) {
            //         console.log("caught cancel");
            //     }
            //     else {
            //         throw error;
            //     }
            // }
        }
        loadData();
        // return () => {
        //     source.cancel();
        // }
    }, [hide])
    const toggle = () => {
        setHide(!hide)
    }
    return (
        <div>
            <button onClick={toggle}>TOGGLE</button>

            {
                mount &&(
                    hide ? <div> {JSON.stringify(data)}</div> : ''

                )

            }
        </div>
    )
}
