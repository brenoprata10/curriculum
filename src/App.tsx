import React from 'react'
import './App.scss'
import {Header} from './components/Header'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'

const App = () => {
	library.add(fab)
	return (
		<div className='App'>
			<header className='App-header'>
				<Header />
				<span>Welcome to My Curriculum!</span>
			</header>
		</div>
	)
}

export default App
