import { useState } from 'react'
import { GameLayout } from './Layout'
import { checkWin } from './actions/utils'

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('x')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(['', '', '', '', '', '', '', '', ''])

	const onHandleClick = (e) => {
		if (field[e.target.closest('div').id] === '' && !isGameEnded) {
			e.target.classList.add('active')

			setField((prevField) => {
				const newField = [...prevField]
				newField[e.target.id] = currentPlayer

				if (checkWin(newField)) {
					setIsGameEnded(true)
					setCurrentPlayer(currentPlayer)
				}

				if (newField.every((item) => item !== '') && !checkWin(newField)) {
					setIsGameEnded(true)
					setIsDraw(true)
				}

				return newField
			})

			setCurrentPlayer(currentPlayer === 'x' ? '0' : 'x')
		}
	}

	const handleClickRestart = () => {
		setCurrentPlayer('x')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(['', '', '', '', '', '', '', '', ''])
	}

	return (
		<>
			<GameLayout
				onField={field}
				onSetField={setField}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				setCurrentPlayer={setCurrentPlayer}
				currentPlayer={currentPlayer}
				setIsGameEnded={setIsGameEnded}
				onHandleClick={onHandleClick}
				handleClickRestart={handleClickRestart}
			/>
		</>
	)
}

export default Game
