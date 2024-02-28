const BIRTH_DATE = new Date(1995, 11, 4)

export const AboutMeDescription = () => {
	const millisecondsDifference = Math.abs(new Date().getTime() - BIRTH_DATE.getTime())
	const age = Math.floor(millisecondsDifference / (1000 * 3600 * 24 * 365))

	return (
		<div className={'description'}>
			<i>*** Receiving transmission ***</i>
			<span>
				Brazilian, {age} years old, stationed in Germany, video game nerd, pet lover and last, but not least,{' '}
				<b>SOFTWARE DEVELOPER</b>. 👨‍💻
			</span>
			<span>
				On a space journey looking for a mothership that will take me to{' '}
				<b className={'infinity'}>infinity and beyond!</b> 🚀
			</span>
		</div>
	)
}
