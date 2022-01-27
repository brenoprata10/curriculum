import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {faCodepen, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

export const ExternalIcons = () => {
	const Icon = ({icon, url}: {icon: IconProp; url: string}) => (
		<a href={url} target='_blank' rel='noreferrer noopener'>
			<FontAwesomeIcon size={'lg'} icon={icon} />
		</a>
	)

	return (
		<div className={'external-icons'}>
			<Icon icon={faCodepen} url={'https://codepen.io/brenoprata/'} />
			<Icon icon={faLinkedin} url={'https://www.linkedin.com/in/breno-prata-355352118/'} />
			<Icon icon={faGithub} url={'https://github.com/brenoprata10'} />
		</div>
	)
}
