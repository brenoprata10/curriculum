import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const ExternalIcons = () => (
	<div className={'external-icons'}>
		<FontAwesomeIcon icon={['fab', 'npm']} />
		<FontAwesomeIcon icon={['fab', 'codepen']} />
		<FontAwesomeIcon icon={['fab', 'linkedin']} />
		<FontAwesomeIcon icon={['fab', 'github']} />
	</div>
)
