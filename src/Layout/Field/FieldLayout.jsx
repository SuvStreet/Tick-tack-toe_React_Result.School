import styles from './FieldLayout.module.css'

export const FieldLayout = () => {
	return (
		<>
			<div className={styles.field}>
				<div className={styles.row}>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
				</div>
				<div className={styles.row}>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
				</div>
				<div className={styles.row}>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
				</div>
			</div>
		</>
	)
}
