import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import PropTypes from 'prop-types'

import * as actions from '../state/actions'
import Base from './base'
import { Row, Column } from '../components/Layout'
import ContentPanel from "../components/ContentPanel";
import PlanetDetail from '../components/PlanetDetail'

const Planets = ({ planets, onAddToCart }) => {
  return (
    <Base>
      <Row>
        <Column>
          { planets.length > 0 &&
            planets.map(planet => (
              <ContentPanel key={`planet-${planet.id}`}>
                <PlanetDetail
                  titleText={planet.planetName}
                  planet={planet}
                  inCart={ false }
                  handleAdd={onAddToCart}
                />
              </ContentPanel>
            ))}
        </Column>
      </Row>
    </Base>
  )
}

export const handleAdd = ({ actions }, planet ) => {
  actions.addToCart(planet);
  alert('Planet Added!')
}

const enhance = compose(
  withHandlers({
    onAddToCart: props => data => handleAdd(props, data),
  })
)

Planets.propTypes = {
  planets: PropTypes.any.isRequired,
  onAddToCart: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = (state) => {
  return {
    planets: state.planets,
  }
}

const EnhancedPlanets = connect(mapStateToProps, mapDispatchToProps)(
  enhance(Planets)
)

export default EnhancedPlanets
