import { InformationContainer, FieldContainer } from '../../components'

import styles from './GameLayout.module.css'

export const GameLayout = ({ ...props }) => {
	return (
		<>
			{/* {props.isGameEnded ? (
				<InformationContainer isGameEnded={props.isGameEnded} isDraw={props.isDraw} />
			) : (
				<FieldContainer field={props.field} setField={props.setField} />
			)} */}

			<InformationContainer
				isGameEnded={props.isGameEnded}
				isDraw={props.isDraw}
				currentPlayer={props.currentPlayer}
			/>
			<FieldContainer field={props.field} setField={props.setField} />
		</>
	)
}
