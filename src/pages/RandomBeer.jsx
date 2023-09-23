import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'


function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                console.log(response.data);
                setRandomBeer(response.data)
            })
            .catch(err => {
                navigate("/error")
            })
    }, [])
    return (
        <div>
            <Navbar />

            <div className='singleBeerBlock'>
                <img width={80} src={randomBeer.image_url} alt="Fresh Beer" />
                <h1>{randomBeer.name}</h1>
                <h3>{randomBeer.tagline}</h3>
                <p>Attenuation level:{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>Contributed by:{randomBeer.contributed_by}</p>
            </div>

        </div>
    )
}
export default RandomBeer