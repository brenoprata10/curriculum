import {Section} from '../../utils/Section'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Contact = () => (
	<Section wrapperClassName={'contact'} title={'Contact'} icon={faPhoneAlt}>
		<div className={'section'}>
			<b className={'section-title'}>Social Media</b>
			<FontAwesomeIcon
				size={'4x'}
				icon={faLinkedin}
				onClick={() => window.open('https://www.linkedin.com/in/breno-prata-355352118/', '_newtab')}
			/>
		</div>
		<div className={'section'}>
			<b className={'section-title'}>E-mail</b>
			<a href={'mailto:brenoprata@hotmail.com'}>brenoprata@hotmail.com</a>
		</div>
	</Section>
)
