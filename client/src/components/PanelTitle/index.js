import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sizes, typography } from '../../utils/theme'

const Title = styled.h1`
  font-weight: ${typography.light};
  padding: 0 calc(${sizes.paddingSize}/2);
  text-transform: uppercase;
  display: flex;
  align-items: center;
`

const PanelTitle = ({ titleText }) => {
  return (
    <Title>{titleText}</Title>
  )
}

PanelTitle.propTypes = {
  titleText: PropTypes.string,
}

export default PanelTitle
