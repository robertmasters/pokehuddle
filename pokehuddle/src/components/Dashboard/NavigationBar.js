import React from 'react'
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import './NavigationBar.css'

function NavigationBar() {

    const logout = () => { 
        axiosWithAuth()
        .get("/logout")
        .catch((error) => {
            console.log(error)
        })
        .finally(() =>{
            localStorage.removeItem("pokehuddle-token")
        })
      }

    return (
        <div className = "nav-bar-container">
            <div className = "border-line">
                <div className= "img-wrapper">
                    <img className ="avatar-img" src = {require('../../images/Avatars/mewtwoAvatar.png').default} alt = 'Avatar' />
                </div>
                <div className = "links-container">
                    <Link className = "link" to = '' >Home</Link>
                    <Link className = "link" to = 'research' >Research</Link>
                    <Link className = "link" to = 'favoritepokemon' >Favorite Pokemon</Link>
                    <Link className = "link" to = 'leaderboard' >Leaderboard</Link>
                    <Link className = "link" to = 'articles' >Articles</Link>
                    <Link className = "link" to = 'photos' >Photos</Link>
                    <Link className = "link" onClick={logout} to ='/'>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;