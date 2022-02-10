import {Welcome} from './Welcome'
import {AboutMe} from './about-me/AboutMe'
import {JourneyLog} from './journey-log/JourneyLog'
import {Qualification} from './qualification/Qualification'
import {Projects} from './projects/Projects'
import {Contact} from './contact/Contact'

export const Main = () => {
	return (
		<div className={'main'}>
			<Welcome />
			<AboutMe />
			<JourneyLog />
			<Qualification />
			<Projects />
			<Contact />
		</div>
	)
}
