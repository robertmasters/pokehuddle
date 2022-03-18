import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUserData } from '../../store/actions/fetchUserData';
import './Home.css'

function Home(props) {
    const {fetchUserData} = props
    let article = {}
    let noteCreatedDate = "You havent written any notes yet"
    if (props.article.length) {
        article = props.article[props.article.length-1]
        noteCreatedDate = article.createddate.split(" ")[0]

    }
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
                
                <div className = "recent-note-container">
                    <img src = {require('../../images/RecentNote.png').default} alt = 'recent note' />
                    
                    <div className="note-and-pikachu-container">
                        <div className="note">
                            <div className="note-title">{article.title}</div>
                            
                            <div className="created-date">{noteCreatedDate}</div>

                            <div className="note-body">{article.body} {article.body} {article.body} {article.body} {article.body} {article.body}</div>
                        </div>
                            <img className = "pikachu-waving" src= {require('../../images/pikawave2.png').default} alt = "pikachu waving" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        article: state.articles
    }
}

export default connect(mapStateToProps, {fetchUserData})(Home)
