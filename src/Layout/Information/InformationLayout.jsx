import styles from './InformationLayout.module.css'
import resetButton from '../../assets/reset-button.png'

export const InformationLayout = ({ isGameEnded, isDraw, resultGames }) => {
	return (
		<>
			<div className={styles.modal}>
				<div className={styles.content}>
					<div className={styles.title}>{resultGames.title.toUpperCase()}</div>
					<img className={styles.imgResult} src={resultGames.src} alt='tic-tac-toe' />
				</div>
				<button className={styles.close}>
					<img src={resetButton} alt='reset' />
				</button>
			</div>
		</>
	)
}
