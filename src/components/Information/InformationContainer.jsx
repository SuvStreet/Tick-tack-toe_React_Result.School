import { InformationLayout } from '../../Layout'

import cross from '../../assets/cross.svg'
import zero from '../../assets/zero.svg'
import sleep from '../../assets/sleep.svg'

const imegesResultGame = {
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

export const InformationContainer = ({ ...props }) => {
	
	const resultGames = () => {

		if (props.isGameEnded && !props.isDraw) {
      switch (props.currentPlayer.toLowerCase()) {
        case 'x':
          return imegesResultGame.winnerCross
          break
        case '0':
          return imegesResultGame.winnerZero
          break
      }
		} else {
			return imegesResultGame.draw
		}
	}

	return (
		<>
			{props.isGameEnded && (
				<InformationLayout
					isGameEnded={props.isGameEnded}
					isDraw={props.isDraw}
					resultGames={resultGames()}
					handleClickRestart={props.handleClickRestart}
				/>
			)}
		</>
	)
}
