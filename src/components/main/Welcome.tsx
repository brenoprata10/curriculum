import {useEffect, useState} from 'react'

const WELCOME_PHRASE = 'Welcome to my Curriculum!'

export const Welcome = () => {
	const [phase, setPhase] = useState('')
	const [showMouse, setShowMouse] = useState(false)
	const isTypingAnimationCompleted = phase === WELCOME_PHRASE

	useEffect(() => {
		const individualLetters = WELCOME_PHRASE.match(new RegExp('\\w|\\s|!', 'mg'))
		individualLetters?.forEach((letter, index) => {
			setTimeout(() => {
				setPhase((currentPhase) => `${currentPhase}${letter}`)
			}, 180 * (index + 1))
		})
	}, [])

	useEffect(() => {
		if (isTypingAnimationCompleted) {
			setTimeout(() => {
				setShowMouse(true)
			}, 2000)
		}
	}, [isTypingAnimationCompleted])

	return (
		<div className={'welcome'}>
			<div className={'welcome-wrapper'}>
				<h3>{phase}</h3>
				{showMouse && (
					<div className={'mouse-wrapper'}>
						<div className={'icon'} />
					</div>
				)}
			</div>
		</div>
	)
}
