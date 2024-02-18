import PropTypes from 'prop-types'

import { FieldLayout } from '../../Layout'

export const FieldContainer = ({ onField, onHandleClick }) => {
	return (
		<>
			<FieldLayout field={onField} handleClick={onHandleClick} />
		</>
	)
}

FieldContainer.propTypes = {
	onField: PropTypes.array,
	onHandleClick: PropTypes.func,
}
