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
                <div className = "favorite-container">
                    <div>
                        <img className ="favoritestextimg" src = {require('../../images/favoritestext.png').default} alt = 'favorites' />
                    </div>
                </div>
                
                <div className = "news-container">
                    <img className = "newstextimg" src = {require('../../images/RecentNote.png').default} alt = 'news' />
                    <div>
                        <img className = "pikachu-waving" src= {require('../../images/pikawave.png').default} alt = "pikachu waving" />
                    </div>
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
