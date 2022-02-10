import {Badge} from '../../utils/Badge'
import {IProjectItemProps} from './Projects'

export const ProjectItem = ({name, description, image, badges, ribbon, goToCallback}: IProjectItemProps) => (
	<div className={'project-item'}>
		{ribbon && <img src={ribbon} className={'ribbon'} onClick={goToCallback} />}
		<div className={'image-data-container'}>
			<img src={image} alt={name} />
			<div className={'description-wrapper'}>
				<b className={'description-wrapper-title'}>{name}</b>
				<span className={'description-wrapper-value'}>{description}</span>
				<b className={'created-with'}>Created with:</b>
				<div className={'badges-list'}>
					{badges.map((badge, index) => (
						<Badge key={`${name}-badge-${index}`} {...badge} size={'4.5em'} margin={'0 1.5em 0 1.5em'} />
					))}
				</div>
			</div>
		</div>
	</div>
)
