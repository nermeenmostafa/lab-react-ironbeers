import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function NewBeer() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState("")
    const [contributedby, setContributedby] = useState("")

    function handleSubmit(e) {
        e.preventDefault();


        const newBeer = {
            name, tagline, description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedby
        }
        axios.post('https://ih-beers-api2.herokuapp.com/beers', newBeer)
            .then((response) => {
                setName("")
                setTagline("")
                setDescription("")
                setFirstBrewed("")
                setBrewersTips("")
                setAttenuationLevel(0)
                setContributedby("")
                alert("New Beer Created")
                navigate('/')
            })
            .catch(err => {
                navigate("/error")
            })

    }

    return (
        <div>
            <Navbar />
            <div className="NewBeer">
                <h3>Add New Beer</h3>
                <form onSubmit={handleSubmit}>
                <label>
                Name of Beer:
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </label>
            <br/>
            <label>
            Tagline:
                <input type="text" value={tagline} onChange={(e)=>{setTagline(e.target.value)}} />
            </label>
            <br/>
            <label className='col-25'>
            Description:
                <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
            </label>
            <br/>
            <label>
            First Brewed:
                <input type="text" value={firstBrewed} onChange={(e)=>{setFirstBrewed(e.target.value)}} />
            </label>
            <br/>
            <label>
            Brewers Tips:
                <input type="text" value={brewersTips} onChange={(e)=>{setBrewersTips(e.target.value)}} />
            </label>
            <br/>
            <label>
            Attenuation level: 
                <input type="number" value={attenuationLevel} onChange={(e)=>{setAttenuationLevel(e.target.value)}} />
            </label>
            <br/>
            <label>
            Contributed by: 
                <input type="text" value={contributedby} onChange={(e)=>{setContributedby(e.target.value)}} />
                <br/>
                <input type="submit" value="Submit"/>
            </label>
                </form>
                </div>
            </div>
            )
}
            export default NewBeer;