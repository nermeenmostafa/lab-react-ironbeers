import React from 'react'
import { Routes, Route, NavLink,Link } from "react-router-dom"
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'


function Home() {
    return (
        <div>
            <div>
                <Link to={"/beers"} >
                    <img src={beers} alt="" />
                    <div className='indexBlock'>
                        <h1>All Beers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus qui, reiciendis obcaecati eos rerum error deleniti alias et est maiores necessitatibus, non expedita provident eaque placeat nobis laborum quas!</p>
                    </div>
                </Link>
            </div>
            <br />
            <div>
                <NavLink to={"/random-beer"} >
                    <img src={randomBeer} alt="" />
                    <div className='indexBlock'>
                        <h1>Random Beer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus qui, reiciendis obcaecati eos rerum error deleniti alias et est maiores necessitatibus, non expedita provident eaque placeat nobis laborum quas!</p>
                    </div>
                </NavLink>
            </div>
            <br />
            <div>
                <NavLink to={"/new-beer"} >
                    <img src={newBeer} alt="" />
                    <div className='indexBlock'>
                        <h1>New Beer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus qui, reiciendis obcaecati eos rerum error deleniti alias et est maiores necessitatibus, non expedita provident eaque placeat nobis laborum quas!</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default Home