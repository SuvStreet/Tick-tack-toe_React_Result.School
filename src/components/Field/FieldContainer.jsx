import { FieldLayout } from '../../Layout'

export const FieldContainer = ({...props}) => {
  return (
    <>
      <FieldLayout field={props.field} setField={props.setField}/>
    </>
  )
}