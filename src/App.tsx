import React from 'react'
import './App.scss'
import {Header} from './components/Header'
import Particles from 'react-tsparticles'
import * as PARTICLES_OPTIONS from './public/particles.json'

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<Header />
			</header>
			<span>Welcome to My Curriculum!</span>
			<Particles id='tsparticles' options={PARTICLES_OPTIONS as unknown as any} />
		</div>
	)
}

export default App
