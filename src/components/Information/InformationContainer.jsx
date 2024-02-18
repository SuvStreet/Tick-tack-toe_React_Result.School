import PropTypes from 'prop-types'

import { InformationLayout } from '../../Layout'

import cross from '../../assets/cross.svg'
import zero from '../../assets/zero.svg'
import sleep from '../../assets/sleep.svg'

const imagesResultGame = {
	winnerCross: {
		src: cross,
		title: 'Победа!',
	},
	winnerZero: {
		src: zero,
		title: 'Победа!',
	},
	draw: {
		src: sleep,
		title: 'Ничья...',
	},
}

export const InformationContainer = ({
	isGameEnded,
	currentPlayer,
	handleClickRestart,
	isDraw,
}) => {
	const resultGames = () => {
		if (isGameEnded && !isDraw) {
			switch (currentPlayer.toLowerCase()) {
				case 'x':
					return imagesResultGame.winnerCross
				case '0':
					return imagesResultGame.winnerZero
			}
		} else {
			return imagesResultGame.draw
		}
	}

	return (
		<>
			{isGameEnded && (
				<InformationLayout
					isGameEnded={isGameEnded}
					isDraw={isDraw}
					resultGames={resultGames()}
					handleClickRestart={handleClickRestart}
				/>
			)}
		</>
	)
}

InformationContainer.propTypes = {
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	handleClickRestart: PropTypes.func,
	isDraw: PropTypes.bool
}