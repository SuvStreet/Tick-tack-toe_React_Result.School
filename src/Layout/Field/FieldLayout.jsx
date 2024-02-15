import styles from './FieldLayout.module.css'

export const FieldLayout = ({ field, setField }) => {
	// console.log('field', field)
	// console.log('setField', setField)

	return (
		<>
			<div className={styles.field}>
				{field.map((row, i) => {
					return (
						<div className={styles.row} key={i}>
							{row.map((cell, j) => {
								return (
									<button
										className={styles.cell}
										key={j}
										// onClick={() => {
										// 	setField((prev) => {
										// 		const copy = [...prev]
										// 		copy[i][j] = 'X'
										// 		return copy
										// 	})
										// }}
									>
										{cell}
									</button>
								)
							})}
						</div>
					)
				})}
				{/* <div className={styles.row}>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
				</div> */}
				{/* <div className={styles.row}>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
				</div>
				<div className={styles.row}>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
					<button className={styles.cell}></button>
				</div> */}
			</div>
		</>
	)
}
