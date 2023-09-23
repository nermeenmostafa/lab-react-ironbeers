import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'




function Beers() {
    const [allbeers, setAllBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()



    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response.data);
                setAllBeers(response.data)
            })
            .catch(err => {
                navigate("/error")
            })
    }, [])

    useEffect(() => {
        if (searchTerm.length > 0) {
            axios.get(` https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
                .then((response) => {
                    console.log(response.data)
                    setAllBeers(response.data)
                })
        }

    }, [searchTerm])

    return (
        <div>
         <Navbar/>
            <form>
            <h4>Do you want to select anything?</h4>

            <label htmlFor="searchBeer">Search beer: </label>
            <input type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
            </form>
            {allbeers.map((eachBeer) => {
                return (
                    <div key={eachBeer._id} id='eachBeer'>
                        <img src={eachBeer.image_url} width={50} alt="" />
                        <div id='eachBeerContent'>
                            <h2><Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link></h2>
                            <p>{eachBeer.tagline}</p>
                            <p> Contributed by:{eachBeer.contributed_by}</p>
                        </div>
                    </div>
                )
            })
            }


        </div>

    )
}





export default Beers