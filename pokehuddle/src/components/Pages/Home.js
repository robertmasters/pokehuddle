import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import './Home.css'

export default function Home() {
    const [userData, setUserData] = useState({});
    useEffect(() => {
		axiosWithAuth()
			.get("/users/user/3")
			.then((res) => {
				setUserData(res.data)

			})
			.catch((err) => {
				console.log("err: ", err);
			});
	}, []);
    return (
        <div>
            <h1>Welcome {userData.username}!</h1>
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
