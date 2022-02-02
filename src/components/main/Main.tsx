import {Welcome} from './Welcome'
import {AboutMe} from './about-me/AboutMe'
import {JourneyLog} from './journey-log/JourneyLog'

export const Main = () => {
	return (
		<div className={'main'}>
			<Welcome />
			<AboutMe />
			<JourneyLog />
			<div style={{marginTop: 10000}}>asdasd</div>
		</div>
	)
}
