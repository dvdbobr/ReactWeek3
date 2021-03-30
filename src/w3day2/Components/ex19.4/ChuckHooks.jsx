import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ChuckHooks() {
    const [joke, setJoke] = useState('')
    const [categories, setCategories] = useState([])
    const [categoryJoke, setCategory] = useState('')
    const getJoke = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random')
        setJoke(response.data.value)
        console.log(response.data.value);
    }
    const getCategories = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')
        setCategories(response.data)
        console.log(response.data);
    }
    const getCategoryJoke = async (category) => {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        setCategory(response.data.value)
        console.log(response.data.value);
    }
    return (
        <div>
                <button onClick={getJoke}>RADNDOM JOKE</button>
                <div>{joke}</div>
                <button onClick={getCategories}>GET CATEGORIES</button>
                <div>
                    {
                        categories.map(category => {
                            return <button key={category} onClick={() => { getCategoryJoke(category) }}>{category}</button>
                        })
                    }
                </div>

                <div>
                    {categoryJoke}
                </div>
            </div>
    )
}
