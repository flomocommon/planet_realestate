import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, sizes } from '../../utils/theme'

const Header = styled.section`
  margin: 0 ${sizes.paddingSize};
  border-bottom: 1px solid ${colors.overlay};
  display: flex;
  justify-content: space-between;
  color: ${colors.highlight};

`

const PanelHeader = ({ children }) =>
  <Header>{children}</Header>


PanelHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PanelHeader
