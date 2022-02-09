import {Badge} from '../../utils/Badge'

export interface IBadge {
	path: string
	name: string
}

export const QualificationSection = ({title, badges}: {title: string; badges: IBadge[]}) => (
	<div className={'section'}>
		<b>{title}:</b>
		<div className={'badges-grid'}>
			{badges.map(({path, name}) => (
				<Badge key={`${name}-badge`} name={name} path={path} size={'7em'} />
			))}
		</div>
	</div>
)
