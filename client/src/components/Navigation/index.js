import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors, sizes, typography } from '../../utils/theme'

const StyledNavigation = styled.nav`
  background-color: ${colors.header};
  border-top: ${sizes.lineSize} solid ${colors.headerOverlay};
  border-bottom: ${sizes.lineSize} solid ${colors.headerOverlay};
  & li {
    border-bottom: ${sizes.lineSize} solid ${colors.overlay};
    margin-left: ${sizes.baseSizeSmall};
  }
  & li:last-child {
    border-bottom: none;
  }
`


const StyledLink = styled(NavLink)`
  font-size: ${typography.gamma};
  text-transform: uppercase;
  color: ${colors.primary};
  font-weight: bold;
  text-decoration: none;
  display: block;
  padding: ${sizes.baseSize} 0 ${sizes.baseSize} calc(${sizes.baseSizeLarge} - ${sizes.baseSizeSmall});
  box-shadow: inset ${sizes.baseSizeSmall} 0 0 0 ${colors.headerOverlay};
  margin-left: -${sizes.baseSizeSmall};

  &:link, &:visited {
  }
  &:focus, &:hover {
    color: ${colors.secondary};
  }
  &:active {
    color: ${colors.secondary};
    box-shadow: inset ${sizes.baseSizeSmall} 0 0 0 ${colors.secondary};
  }
  &.active {
    color: ${colors.secondary};
    box-shadow: inset ${sizes.baseSizeSmall} 0 0 0 ${colors.secondary};
  }
`
const LinkText = styled.span`
  padding-left: ${sizes.baseSizeSmall};
`

const Navigation = ({ links }) =>
  <StyledNavigation>
    <ul>
      {links.map(
        link => <li key={`link-${link.label}`}><StyledLink exact to={link.path}>{link.icon}<LinkText>{link.label}</LinkText></StyledLink></li>
      )}
    </ul>
  </StyledNavigation>

export default Navigation
