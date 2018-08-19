import React from 'react'
import PropTypes from 'prop-types'
import { Row, Column } from '../Layout'
import PanelHeader from "../PanelHeader"
import PanelBody from "../PanelBody"
import PanelTitle from "../PanelTitle"
import { Label } from "../Label"
import { ButtonFullWidth } from "../Button"

const PlanetDetail = ({ planet, inCart, handleAdd, handlePurchase, ...props }) => {
  const { 
    moon, 
    galaxy,
    star_cluster,
    principle_star,
    national_space_agency,
    method_of_sale,
    price,
  } = planet;
  return (
    <Row>
      <Column>
        <PanelHeader>
          <PanelTitle {...props}/>
        </PanelHeader>
        <PanelBody>
          <Row>
            <Column>
              <p><Label>Moon: </Label>{ moon }</p>
              <p><Label>Galaxy: </Label>{ galaxy }</p>
              <p><Label>Star Cluster: </Label>{ star_cluster }</p>
              <p><Label>Principle Star: </Label>{ principle_star }</p>
              <p><Label>National Space Agency: </Label>{ national_space_agency }</p>
              <p><Label>Method of Sale: </Label>{ method_of_sale }</p>
              <p><Label>Price: </Label>{ price }</p>
            </Column>
          </Row>
          { inCart 
            ? <ButtonFullWidth handleClick={() => handlePurchase(planet)}>
                Purchase
              </ButtonFullWidth>
            : <ButtonFullWidth handleClick={() => handleAdd(planet)}>
                Add To Cart
              </ButtonFullWidth>
          }
          
        </PanelBody>
      </Column>
    </Row>
  )
}

PlanetDetail.propTypes = {
  planet: PropTypes.any,
}

export default PlanetDetail;
