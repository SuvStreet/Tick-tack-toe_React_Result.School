const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
]

export const checkWin = (field) => {

  const playerCross = indexCells(field, 'x')
  const playerZero = indexCells(field, '0')

	const isWinCross = WIN_PATTERNS.some((winSet) =>
		winSet.every((winNum) => playerCross.includes(winNum)),
	)

	const isLoseZero = WIN_PATTERNS.some((winSet) =>
		winSet.every((winNum) => playerZero.includes(winNum)),
	)

	return isWinCross || isLoseZero
}

const indexCells = (field, player) => {
	return field
		.map((item, index) => (item === player ? index : null))
		.filter((item) => item !== null)
}
