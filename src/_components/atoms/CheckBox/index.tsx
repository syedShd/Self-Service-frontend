import { Checkbox } from '@material-ui/core'
import React from 'react'

type CheckBoxProps = {
  isChecked: boolean
  handleChange: () => void
  indeterminate: boolean
  indeterminateIconSrc: string | undefined
}

const CheckBoxComponent: React.FC<CheckBoxProps> = ({
  isChecked,
  handleChange,
  indeterminate,
  indeterminateIconSrc,
}) => {
  return (
    <Checkbox
      data-testid="checkboxTest"
      checked={isChecked}
      onChange={handleChange}
      indeterminate={indeterminate}
      indeterminateIcon={
        <img src={indeterminateIconSrc} alt="indeterminateIcon" />
      }
    />
  )
}
export default CheckBoxComponent
