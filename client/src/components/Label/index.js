import styled from 'styled-components'
import { colors, sizes, typography } from '../../utils/theme'

export const Label = styled.label`
  display: inline-block;
  font-size: ${typography.gamma};
  font-weight: bold;
  color: ${colors.primary};
  padding-right: ${sizes.baseSize};
  line-height: ${typography.alpha};
  text-align: right;
`