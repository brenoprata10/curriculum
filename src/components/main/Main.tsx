import {Welcome} from './Welcome'
import {AboutMe} from './about-me/AboutMe'
import {JourneyLog} from './journey-log/JourneyLog'
import {Qualification} from './qualification/Qualification'

export const Main = () => {
	return (
		<div className={'main'}>
			<Welcome />
			<AboutMe />
			<JourneyLog />
			<Qualification />
			<div style={{marginTop: 10000}}>asdasd</div>
		</div>
	)
}
