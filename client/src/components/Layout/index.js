import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/theme'

export const Container = styled.section`
  background:${colors.overlay};
  color:${colors.primary};
  padding: 5px;
`

const FlexRow = styled.div`
  display:flex;
  width:100%;
`

export const Row = ({ children }) =>
  <FlexRow>{children}</FlexRow>

const FlexColumn = styled.div`
  flex:1 1 0px;
`

export const Column = ({ children }) =>
  <FlexColumn>{children}</FlexColumn>
