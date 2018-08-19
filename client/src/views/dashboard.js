import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../state/actions'
import Base from './base'
import { Row } from '../components/Layout'
import ContentPanel from "../components/ContentPanel";
import Cart from "../components/Cart";
import Portfolio from "../components/Portfolio";

// TODO: Mocking for now, but would be planets that were purchased through the cart.
import mockPurchasedPlanets from './mockPurchasedPlanets'

const Dashboard = ({
  cart
}) => {
  return (
    <Base>
      <Row>
        <ContentPanel>
          <Cart 
            titleText="Your Cart"
            cart={ cart }
            inCart={ true }
          />
        </ContentPanel>
        <ContentPanel>
          <Portfolio 
            titleText="Your Portfolio"
            purchasedPlanets={ mockPurchasedPlanets }
          />
        </ContentPanel>
      </Row>
    </Base>
  )
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const EnhancedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)


export default EnhancedDashboard
