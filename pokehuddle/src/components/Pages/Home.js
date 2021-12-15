import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div>
            <h1>Welcome!</h1>
            <div data-testid = "home" className = "home-container">
                <div className = "favorite-notification-container">
                    <div>
                        <img className ="favoritestextimg" src = {require('../../images/favoritestext.png').default} alt = 'favorites' />
                    </div>
                    <div>
                        <img className ="notificationstextimg" src = {require('../../images/notificationstext.png').default} alt = 'notifications' />
                    </div>
                </div>
                
                <div className = "news">
                    <img className ="newstextimg" src = {require('../../images/newstext.png').default} alt = 'news' />
                </div>
            </div>
        </div>
    )
}
