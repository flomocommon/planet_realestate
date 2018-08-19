import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, typography, sizes } from '../../utils/theme'

const BaseButton = ({ handleClick, children, ...rest }) => {
  return (
    <button onClick={handleClick} { ...rest}>
      {children}
    </button>
  )
}

BaseButton.defaultProps = {
  children: null,
  handleClick: null,
}

BaseButton.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
}

export const ButtonLink = styled(BaseButton)`
  display: flex;
  align-items: center;
  cursor: pointer;
  border:none;
  appearance:none;
  background:transparent;
  font-size: ${typography.gamma};
  font-weight: ${typography.bold};
  color:${colors.secondary};
  text-decoration: none;
  &:hover { text-decoration: underline }
  &:focus { outline: 0 }
  svg { margin-right: ${sizes.baseSizeSmall} }
`

const Button = styled(BaseButton)`
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  font-size: ${typography.beta};
  padding: ${sizes.baseSizeSmall} calc(4 * ${sizes.baseSize});
  color: #FFF;
  background-color: ${colors.secondary};
`

export const ButtonFullWidth = styled(Button)`
  width: 100%;
  min-width: min-content;
  white-space: nowrap;
`
export default Button