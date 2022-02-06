import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons'
import {AboutMeDescription} from './AboutMeDescription'
import {AboutMeImage} from './AboutMeImage'
import {Section} from '../../utils/Section'

export const AboutMe = () => (
	<Section wrapperClassName={'about-me'} title={'About me'} icon={faUserAstronaut}>
		<AboutMeDescription />
		<AboutMeImage />
	</Section>
)
