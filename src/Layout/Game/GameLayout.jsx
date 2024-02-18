import { InformationContainer, FieldContainer } from '../../components'

import PropTypes from 'prop-types'

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

GameLayout.propTypes = {
	onField: PropTypes.array,
	onSetField: PropTypes.func,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	setCurrentPlayer: PropTypes.func,
	currentPlayer: PropTypes.string,
	onHandleClick: PropTypes.func,
	handleClickRestart: PropTypes.func
}
