import PropTypes from 'prop-types'
import { PropTypes as MuiProps } from '@material-ui/core'
import MUITypography from '@material-ui/core/Typography'
import { getMappedVariant } from '../../../core-utils/helper'

type TypographyProps = {
  variant: string
  children: string
  className?: string
  align?: MuiProps.Alignment
}

const Typography = ({
  variant,
  children,
  className,
  align,
}: TypographyProps) => (
  <MUITypography
    variant={getMappedVariant(variant)}
    className={className}
    align={align}
    data-testid="testTypography"
  >
    {children}
  </MUITypography>
)

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  align: PropTypes.string,
}

Typography.defaultProps = {
  variant: 'body1',
  align: 'left',
  className: undefined,
}

export default Typography
