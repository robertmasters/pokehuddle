import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';
import './DashboardStyles/SideBar.css'

function SideBar() {
    const {path} = useRouteMatch()

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
                    <Link className = "link" to ={`${path}/home`}>Home</Link>
                    <Link className = "link" to ={`${path}/research`}>Research</Link>
                    <Link className = "link" to ={`${path}/favoritepokemon`}>Favorite Pokemon</Link>
                    <Link className = "link" to ={`${path}/leaderboards`}>Leaderboards</Link>
                    <Link className = "link" to ={`${path}/personalnotes`}>Personal Notes</Link>
                    <Link className = "link" to ={`${path}/photos`}>Photos</Link>
                    <Link className = "link" onClick={logout} to ='/'>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
