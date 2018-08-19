import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, sizes } from '../../utils/theme'

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.panel};
  border-radius: 5px;
  margin: ${sizes.baseSizeSmall};
  border-bottom: 2px solid ${colors.background};
`

const ContentPanel = ({ children, ...rest }) =>
  <Panel {...rest}>{children}</Panel>

ContentPanel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentPanel
