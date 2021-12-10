import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
	return (
		<div>
			<div>back to login<Link className = "link" to ='/'>click here </Link></div>
			<h1>404</h1>
			<h1>Page Not Found</h1>
		</div>
	)
}
