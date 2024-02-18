import styles from './FieldLayout.module.css'

const switchClass = (cell) => {
	switch (cell) {
		case 'x':
			return styles.cross
		case '0':
			return styles.zero
		default:
			return ''
	}
}

export const FieldLayout = ({ field, handleClick }) => {
	return (
		<>
			<div className={styles.field} onClick={handleClick}>
				{field.map((cell, i) => {
					return (
						<div className={styles.cell + ' ' + (cell ? styles.active : '')} key={i}>
							<div className={styles.front + ' ' + switchClass(cell)}></div>
							<div className={styles.back} id={i}></div>
						</div>
					)
				})}
			</div>
		</>
	)
}
