import { InformationLayout } from '../../Layout'

import cross from '../../assets/cross.png'
import zero from '../../assets/zero.png'
import sleep from '../../assets/sleep.png'

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
		if (props.isGameEnded) {
      switch (props.currentPlayer.toLowerCase()) {
        case 'x':
          return imegesResultGame.winnerCross
          break
        case '0':
          return imegesResultGame.winnerZero
          break
        default:
          return imegesResultGame.draw
      }
		}
	}

	return (
		<>
			{props.isGameEnded && (
				<InformationLayout
					isGameEnded={props.isGameEnded}
					isDraw={props.isDraw}
					resultGames={resultGames()}
				/>
			)}
		</>
	)
}
