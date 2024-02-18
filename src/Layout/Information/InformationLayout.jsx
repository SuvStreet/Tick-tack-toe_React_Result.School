import PropTypes from 'prop-types'

import styles from './InformationLayout.module.css'
import resetButton from '../../assets/reset-button.png'

export const InformationLayout = ({ handleClickRestart, resultGames }) => {
	return (
		<>
			<div className={styles.modal}>
				<div className={styles.content}>
					<div className={styles.title}>{resultGames.title.toUpperCase()}</div>
					<img className={styles.imgResult} src={resultGames.src} alt='tic-tac-toe' />
				</div>
				<button className={styles.close} onClick={handleClickRestart}>
					<img src={resetButton} alt='reset' />
				</button>
			</div>
		</>
	)
}

InformationLayout.propTypes = {
	handleClickRestart: PropTypes.func,
	resultGames: PropTypes.object
}