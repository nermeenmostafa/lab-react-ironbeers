import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function SingleBeer() {
    const [SingleBeer, setSingleBeer] = useState(null);
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => {
                console.log(response.data);
                setSingleBeer(response.data)
            })
            .catch(err => {
                navigate("/error")
            })

    }, [])
    return (
        <div>
                <Navbar />
            {SingleBeer && (<div id="singleBeerBlock">

                <img width={80} src={SingleBeer.image_url} alt="beer.name" />
                <h1>{SingleBeer.name}</h1>
                <h3>{SingleBeer.tagline}</h3>
                <p>First brewed:{SingleBeer.first_brewed}</p>
                <p>Attenuation level:{SingleBeer.attenuation_level}</p>
                <p>{SingleBeer.description}</p>
                <p>Contributed by:{SingleBeer.contributed_by}</p>
            </div>)}
        

        </div>
    )
}


export default SingleBeer;