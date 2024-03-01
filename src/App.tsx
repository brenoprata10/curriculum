import './App.scss'
import {Header} from './components/Header'
import Particles from 'react-tsparticles'
import * as PARTICLES_OPTIONS from './public/particles.json'
import {Main} from './components/main/Main'
import {Footer} from './components/Footer'
import {PDFDownloadLink} from '@react-pdf/renderer'
import CurriculumPDF from './components/pdf'

const App = () => {
	return (
		<>
			<Header />
			<div className={'content'}>
				<PDFDownloadLink document={<CurriculumPDF />} fileName='somename.pdf'>
					{({blob, url, loading, error}) => (loading ? 'Loading document...' : 'Download now!')}
				</PDFDownloadLink>
				<Main />
			</div>
			<Footer />
			<Particles width={'.1'} height={'.1'} id='tsparticles' options={PARTICLES_OPTIONS as unknown as any} />
		</>
	)
}

export default App
