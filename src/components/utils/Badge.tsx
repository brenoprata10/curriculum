export const Badge = ({name, path, size, margin}: {name: string; path: string; size: string; margin?: string}) => (
	<div className={'badge'} style={{margin}}>
		<img src={path} style={{width: size, height: size}} />
		<span>{name}</span>
	</div>
)
