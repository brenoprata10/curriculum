import './App.scss'
import {Header} from './components/Header'
import Particles from 'react-tsparticles'
import * as PARTICLES_OPTIONS from './public/particles.json'
import {Main} from './components/main/Main'
import {Footer} from './components/Footer'

const App = () => {
	return (
		<>
			<Header />
			<div className={'content'}>
				<Main />
				<Footer />
			</div>
			<Particles width={'.1'} height={'.1'} id='tsparticles' options={PARTICLES_OPTIONS as unknown as any} />
		</>
	)
}

export default App
