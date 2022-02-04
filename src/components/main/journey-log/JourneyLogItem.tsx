export const JourneyLogItem = ({
	name,
	role,
	date,
	image,
}: {
	name: string
	role: string
	date: string
	image: string
}) => (
	<div className={'planet'}>
		<img src={image} />
		<span className={'planet-name'}>{name}</span>
		<span className={'planet-role'}>{role}</span>
		<span className={'planet-date'}>{date}</span>
	</div>
)
