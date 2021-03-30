import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

export default function Countries() {
    const [term, setTerm] = useState('')
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    useEffect(() => {
        const search = async () => {
            const result = await axios.get('https://restcountries.eu/rest/v2/all')
            console.log(result.data);
            setCountries(result.data)
        }
        search()
    }, [])
    useEffect(() => {
        const filterCountries = () => {
            setFilteredCountries(
                countries.filter(country => { return country.name.toLowerCase().includes(term.toLowerCase()) })
            )
        }
        filterCountries()
    }, [term,countries])

    return (
        <div>
            <input type="text" name="search" onChange={e => setTerm(e.target.value)} />
            {
                <ul>
                    {filteredCountries.map((c,index) => {
                        return <li key={index}>{c.name}</li>
                    })}
                </ul>
            }
        </div>
    )
}
