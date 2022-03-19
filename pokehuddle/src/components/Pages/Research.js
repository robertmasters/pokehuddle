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
    const [summary, setSummary] = useState('')

    function handleChange(e) {
        setSearchName({
          pokemon: {
                ...searchName.pokemon,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleEnterPress(e) {
        
		if (e.keyCode === 13) {
			getData()
		}
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

        axios
    .get("https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1")
    .then((res) => {
        setSummary(res.data[0])
    })
    }, [])

    function getData(e){
        e.preventDefault()
        
        if(searchName.pokemon.pokename) {        
            axios
            .get(`https://pokeapi.co/api/v2/pokemon/${searchName.pokemon.pokename.toLowerCase()}`)
            .then(
                (res) => {
                    setPokemon(res.data)
                }
            )
            .catch((err) => console.log(err.response.data.error))
        }
    }

    return (
        <div data-testid = "research" className = "component-container">
            {/*<img className ="researchtext" src = {require('../../images/Researchtext.png').default} alt = 'research title' />*/}
            <div className = "pokemon-search">
                <form className="pokemon-search-form" onSubmit={getData} > 
                    <input className = 'search'
                        type = 'text'
                        name = 'pokename'
                        placeholder = "Pokemon name"
                        value = {searchName.pokemon.pokename}
                        onKeyPress={handleEnterPress}
                        onChange ={handleChange}
                    />
                    <button 
                    data-testid = 'search-btn'
                    className = "search-btn">Search</button>
                </form>
                
            </div>
            <div></div>
        
            {pokemon !== '' ?
                <div className = 'pokemon-container'>

                    <div className = 'image'>   
                        <img className ="pokemon-image" src={pokemon.sprites.other["official-artwork"].front_default} alt = 'pokemon'/>
                        <div className="underpic-metircs">
                            <div>Weight: {Math.round(pokemon.weight * 0.2204623)} lbs.</div>
                            <div>Height: {pokemon.height} dm.</div>
                            <div>HP: {pokemon.stats[0].base_stat}</div>
                        </div>

                    </div>
                    
                    <div className = 'pokemon-details-container'>
                        <div data-testid="name" className = "pokemon-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div> {/*name comes in all lower case, this function allows me to uppercase the first letter of the string */}
                        <div>No. {pokemon.id}</div>

                        <div className = 'pokemon-side-metrics'>
                             <div>Type: {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</div>
                             <div>Pokemon Summary</div>
                             <div className="pokemon-summary">{summary}</div>

                        </div>
                    </div>
                </div>
            :
                <div></div>
            }
        </div>
    )
}
