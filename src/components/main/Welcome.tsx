import {useEffect, useState} from 'react'

const WELCOME_PHRASE = 'Welcome to my Curriculum!'

export const Welcome = () => {
	const [phase, setPhase] = useState('')

	useEffect(() => {
		const individualLetters = WELCOME_PHRASE.match(new RegExp('\\w|\\s|!', 'mg'))
		individualLetters?.forEach((letter, index) => {
			setTimeout(() => {
				setPhase((currentPhase) => `${currentPhase}${letter}`)
			}, 180 * (index + 1))
		})
	}, [])

	return (
		<div className={'welcome'}>
			<div className={'welcome-wrapper'}>
				<h3>{phase}</h3>
				<div className={'mouse'} />
			</div>
		</div>
	)
}
