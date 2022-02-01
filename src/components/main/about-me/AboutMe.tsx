import {Title} from '../../utils/Title'
import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons'
import {AboutMeDescription} from './AboutMeDescription'
import {AboutMeImage} from './AboutMeImage'

export const AboutMe = () => (
	<div className={'about-me'}>
		<Title name={'About me'} icon={faUserAstronaut} />
		<div className={'content'}>
			<AboutMeDescription />
			<AboutMeImage />
		</div>
	</div>
)
