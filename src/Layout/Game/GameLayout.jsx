import { InformationContainer, FieldContainer } from '../../components'

import styles from './GameLayout.module.css'

export const GameLayout = ({ ...props }) => {
	return (
		<>
			<InformationContainer />
			<FieldContainer field={props.field} setField={props.setField} />
		</>
	)
}
