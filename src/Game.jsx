import { useState } from 'react'
import { GameLayout } from './Layout'

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState([
		['', '', ''],
		['', '', ''],
		['', '', ''],
	])

	return (
		<>
			<GameLayout 
				field={field}
				setField={setField}
			/>
		</>
	)
}

export default Game
