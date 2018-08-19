import React from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../../utils/theme'

export const Container = styled.section`
  background:${colors.primary};
  color:${colors.secondary};
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

export const RightAlignedColumn = styled(FlexColumn)`
  text-align: right;
`

export const SpaceBetweenRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`

export const Inner = styled.section`
  margin: 0  ${sizes.baseSize} ${sizes.baseSize};
`
