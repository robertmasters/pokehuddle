import React from 'react'
import {Navigate, Route} from 'react-router-dom'

//render a route component
//take in all of the same routes as a regular route component
//check to see if the user is authenticated
//if they are, tender the component that was passed in
// if not , redirect user to /login

function PrivateRoute({component: Component, ...rest}) { //*the prop that is being sent in is an actual component. I need to seperate component because it causes render prop to be ignored if I use the {...props} in the route without destructuring the prop object and taking out the component, to do this I use the rest operator to use all of the props that are being passed with the exception of the component prop, then instead of passing {...props} to Route I pass {...rest} which contains the rest of the props after the component has been taken out. //simultaniously i have to rename component to start with capital letter so I can render it 
    return (
        <Route {...rest} render ={()=>{
            if (window.localStorage.getItem('token')) {
                return <Component/>
            } else {
                return <Navigate to = '/login' />
            }
        }}/>
    )
}

export default PrivateRoute