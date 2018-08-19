import React from 'react';
import { Provider } from 'react-redux'
import createStore from './state/store'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  compose, lifecycle
} from 'recompose'
import * as actions from './state/actions'

const baseStore = createStore()

const FullHeight = styled.div`
  height: 100%;
`

const AppState = (props) => {
  return <FullHeight {...props} />
}

const enhance = compose(
  lifecycle({
    componentWillMount(){
      this.props.actions.initialize()
    },
    componentDidMount(){
      this.props.actions.requestPlanets()
    },
    // componentWillUnmount(){
    //   this.props.actions.destroy();
    // }
  })
)

const mapStateToProps = (state) => {
  return {
    planets: state.planets,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const EnhancedAppState = connect(mapStateToProps, mapDispatchToProps)(
  enhance(AppState)
)

const App = ({ children }) =>
  <Provider store={baseStore}>
    <EnhancedAppState>
      { children }
    </EnhancedAppState>
  </Provider>

export default App;
