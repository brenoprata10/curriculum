import {Welcome} from './Welcome'
import {AboutMe} from './about-me/AboutMe'

export const Main = () => {
	return (
		<div className={'main'}>
			<Welcome />
			<AboutMe />
			<div style={{marginTop: 10000}}>asdasd</div>
		</div>
	)
}
