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
            localStorage.removeItem("pokehuddle-username")
        })
      }

    return (
        <nav className = "nav-bar-container">
            <div className = "border-line">
                <div className= "img-wrapper">
                    <img className ="avatar-img" src = {require('../../images/Avatars/mewtwoAvatar.png').default} alt = 'Avatar' />
                </div>
                <ul classname="navigation-menu" role={"navigation"}>
                    <li><span className="menu">MENU</span>
                        <ul className = "links-container">
                            <li><Link className = "link" to = '' >Home</Link></li>
                            <li><Link className = "link" to = 'research' >Research</Link></li>
                            <li><Link className = "link" to = 'favoritepokemon' >Favorites</Link></li>
                            <li><Link className = "link" to = 'leaderboard' >Leaderboard</Link></li>
                            <li><Link className = "link" to = 'articles' >Notes</Link></li>
                            <li><Link className = "link" to = 'photos' >Photos</Link></li>
                            <li><Link className = "link" onClick={logout} to ='/'>Logout</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;