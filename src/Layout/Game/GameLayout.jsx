import { InformationContainer, FieldContainer } from '../../components'

export const GameLayout = ({
	onField,
	onSetField,
	isGameEnded,
	isDraw,
	setCurrentPlayer,
	currentPlayer,
	onHandleClick,
	handleClickRestart
}) => {
	return (
		<>
			<InformationContainer
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				currentPlayer={currentPlayer}
				handleClickRestart={handleClickRestart}
			/>
			<FieldContainer
				onField={onField}
				onSetField={onSetField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				onHandleClick={onHandleClick}
			/>
		</>
	)
}
