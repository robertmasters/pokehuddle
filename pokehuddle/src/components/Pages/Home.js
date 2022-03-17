import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUserData } from '../../store/actions/fetchUserData';
import './Home.css'

function Home(props) {
    const {fetchUserData} = props
    useEffect(() => {
        fetchUserData()
	}, [fetchUserData]);
    return (
        <div>
            <h1>Welcome {props.username}!</h1>
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

const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps, {fetchUserData})(Home)
