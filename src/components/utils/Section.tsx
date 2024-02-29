import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {Title} from './Title'

export const Section: React.FC<{
	wrapperClassName: string
	title: string
	icon: IconProp
	children: React.ReactNode
}> = ({wrapperClassName, title, icon, children}) => (
	<div className={wrapperClassName}>
		<Title name={title} icon={icon} />
		<div className={`section-content ${wrapperClassName}-content`}>{children}</div>
	</div>
)
