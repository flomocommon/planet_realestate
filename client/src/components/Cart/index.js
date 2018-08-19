import React from 'react'
import { Row, Column } from '../Layout'
import PanelHeader from "../PanelHeader"
import PanelBody from "../PanelBody"
import PanelTitle from "../PanelTitle"
import { Label } from "../Label"
import ContentPanel from "../ContentPanel";
import PlanetDetail from '../PlanetDetail'

const EmptyCart = () =>
  <div>
    <p><Label>Hi, this is your Cart</Label></p>
    <p><Label>It's empty now</Label></p>
    <p><Label>Switch to the Planets view to Add some to cart</Label></p>
  </div>

const Cart = ({ cart, inCart, ...props }) => {
  return (
    <Row>
      <Column>
        <PanelHeader>
          <PanelTitle { ...props }/>
        </PanelHeader>
        <PanelBody>
          <Row>
            <Column>
              { cart.length > 0 
                ? cart.map(item => {
                  return (
                    <ContentPanel key={`planet-${ item.id }`}>
                      <PlanetDetail
                        titleText={ item.planetName }
                        planet={ item }
                        inCart={ inCart }
                        handlePurchase={(item) => alert(`Purchasing ${item.planetName}...`)}
                      />
                    </ContentPanel>
                  )
                })
                : <EmptyCart />
              }
            </Column>
          </Row>
        </PanelBody>
      </Column>
    </Row>
  )
}


export default Cart;
