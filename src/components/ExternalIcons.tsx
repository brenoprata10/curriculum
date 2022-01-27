import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {SizeProp, IconProp} from '@fortawesome/fontawesome-svg-core'
import {faNpm, faCodepen, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

export const ExternalIcons = () => {
	const Icon = ({icon, size = 'lg', url}: {icon: IconProp; url: string; size?: SizeProp}) => (
		<a href={url} target='_blank' rel='noreferrer noopener'>
			<FontAwesomeIcon size={size} icon={icon} />
		</a>
	)

	return (
		<div className={'external-icons'}>
			<Icon icon={faNpm} url={'https://www.npmjs.com/~breno.prata'} />
			<Icon icon={faCodepen} url={'https://codepen.io/brenoprata/'} />
			<Icon icon={faLinkedin} url={'https://www.linkedin.com/in/breno-prata-355352118/'} />
			<Icon icon={faGithub} url={'https://github.com/brenoprata10'} />
		</div>
	)
}
