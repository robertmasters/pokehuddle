import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Research.css'

const searchInitialState = {
        pokemon: {
            pokename: ''
        }
    }

export default function Research() {

    const [searchName, setSearchName] = useState(searchInitialState)
    const [pokemon, setPokemon] = useState('')

    function handleChange(e) {
        setSearchName({
          pokemon: {
                ...searchName.pokemon,
                [e.target.name]: e.target.value
            }
        })
    }

    useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(
        (res) => {
            setPokemon(res.data)
        }
    )
    .catch((err) => console.log(err.response.data.error))
    }, [])

    function getData(){
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${searchName.pokemon.pokename.toLowerCase()}`)
        .then(
            (res) => {
                setPokemon(res.data)
            }
        )
        .catch((err) => console.log(err.response.data.error))
    }

    return (
        <div className = "component-container">
            <img className ="researchtext" src = {require('../../images/Researchtext.png').default} alt = 'research title' />
            <div className = "pokemon-container"> 
                <input className = 'search'
                    type = 'text'
                    name = 'pokename'
                    placeholder = "Pokemon name"
                    value = {searchName.pokemon.pokename}
                    onChange ={handleChange}
                />
                <button onClick = {getData} className = "search-btn">Search</button>
            </div>
            <div></div>
        
            {pokemon !== '' ?
                <div className = 'pokemon-details-container'>
                    <h1 className = "pokemon-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1> {/*name comes in all lower case, this function allows me to uppercase the first letter of the string */}
                    <h2>No. {pokemon.id}</h2>
                    <div className = 'sprites'>   
                        <img className ="pokemon-image" src={pokemon.sprites.other["official-artwork"].front_default} alt = 'pokemon'/>
                    </div>
                    <div className = 'pokemon-metrics'>
                        <div>Weight: {Math.round(pokemon.weight * 0.2204623)} lbs.</div>
                        <div>Height: {pokemon.height} dm.</div>
                        <div>Type: {pokemon.types[0].type.name}</div>
                        <div>HP: {pokemon.stats[0].base_stat}</div>
                    </div>
                </div>
            :
                <div></div>
            }
        </div>
    )
}
