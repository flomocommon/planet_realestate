import React from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Navigation from '../components/Navigation'
import { colors, sizes } from '../utils/theme'
import { routes } from '../utils/navigation';

const FullHeightFlexRow = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  min-height: 100%;
  align-items: stretch;
`

const Header = styled.header`
  flex: 0 0 calc(15 * ${sizes.baseSize});
  padding-top: calc(8 * ${sizes.baseSize});
  background-color: ${colors.header};
  box-shadow: inset ${sizes.baseSizeSmall} 0 0 0 ${colors.headerOverlay};
`
const Main = styled.main`
  flex: 0 1 auto;
  padding: ${sizes.baseSizeSmall};
`


const Base = ({
  children, 
}) =>
  <FullHeightFlexRow>
    <Header>
      <Navigation links={routes} />
    </Header>
    <Main>
      {children}
    </Main>
  </FullHeightFlexRow>

const enhance = compose(
  withHandlers({
   
  })
)

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = (state) => {
  return {
  
  }
}

const EnhancedBase = connect(mapStateToProps, mapDispatchToProps)(
  enhance(Base)
)

export default EnhancedBase
