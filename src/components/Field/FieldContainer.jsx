import { FieldLayout } from '../../Layout'
import { checkWin } from '../../actions/utils'

export const FieldContainer = ({ ...props }) => {
	
	return (
		<>
			<FieldLayout field={props.onField} handleClick={props.onHandleClick} />
		</>
	)
}
