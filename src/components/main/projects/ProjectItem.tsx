import {IProjectItemProps} from './Projects'

export const ProjectItem = ({name, description, image, badges, goToCallback}: IProjectItemProps) => (
	<div className={'project-item'}>
		<div>
			<img src={image} alt={name} />
			<div>
				<span>{name}</span> <span>{description}</span>
			</div>
		</div>
	</div>
)
