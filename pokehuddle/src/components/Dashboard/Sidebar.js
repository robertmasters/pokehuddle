import React from 'react'
import {Link, useMatch} from 'react-router-dom';
import './SideBar.css'

function SideBar() {
    // const {path} = useMatch()

    const logout = () => {
        //also send a request to /api/logout once api is set up
        // window.localStorage.removeItem('token')
        console.log("clicked logged out")
      }

    return (
        <div className = "nav-bar-container">
            <div className = "border-line">
                <div className= "img-wrapper">
                    <img className ="avatar-img" src = {require('../../images/Avatars/mewtwoAvatar.png').default} alt = 'Avatar' />
                </div>
                <div className = "links-container">
                    <Link className = "link" to = 'home' >Home</Link>
                    <Link className = "link" to = 'research' >Research</Link>
                    <Link className = "link" to = 'favoritepokemon' >Favorite Pokemon</Link>
                    <Link className = "link" to = 'leaderboard' >Leaderboard</Link>
                    <Link className = "link" to = 'personalnotes' >Personal Notes</Link>
                    <Link className = "link" to = 'photos' >Photos</Link>
                    <Link className = "link" onClick={logout} to ='/'>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
