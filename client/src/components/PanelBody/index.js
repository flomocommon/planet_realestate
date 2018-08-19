import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, sizes } from '../../utils/theme'

const Body = styled.section`
  flex: 1;
  padding: ${sizes.paddingSize};
  color: ${colors.secondary};
`

const PanelBody = ({ children }) => {
  return (
    <Body>
     { children }
    </Body>
  )
}

PanelBody.propTypes = {
  children: PropTypes.node.isRequired,
}


export default PanelBody
