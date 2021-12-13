import React from 'react'

export default function Header() {
	return (
		<header className = "header" role = "banner">
				<img className ="bannerimg" src = {require('../../images/PokeHuddle-Title.png').default} alt = 'pokehuddle' />
		</header>
	)
}
