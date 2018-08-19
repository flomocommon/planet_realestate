import React from 'react'
import { Row, Column, Container } from '../Layout'
import PanelHeader from "../PanelHeader"
import PanelBody from "../PanelBody"
import PanelTitle from "../PanelTitle"
import { Label } from "../Label"
import ContentPanel from "../ContentPanel";

const EmptyPortfolio = () =>
  <div>
    <p><Label>Hi, you haven't made any purchases yet</Label></p>
    <p><Label>Purchase from your Cart items to view as portfolio</Label></p>
  </div>

const Card = ({ children, ...props }) => 
  <Container>
     <Label>
      { children }
     </Label>
  </Container>


const Portfolio = ({ purchasedPlanets, ...props }) => {
  return (
    <Row>
      <Column>
        <PanelHeader>
          <PanelTitle {...props}/>
        </PanelHeader>
        <PanelBody>
          <Row>
            <Column>
             { purchasedPlanets.length > 0 
               ? purchasedPlanets.map(planet => {
                 return (
                  <ContentPanel key={`planet-${planet.id}`}>
                    <Card>
                      Planet Name - { planet.planetName }
                    </Card>
                    <Card>
                      Purchase Price - { planet.price }
                    </Card>
                    <Card>
                      Growth Percentage - 50%
                    </Card>
                  </ContentPanel>
                 )
               })
               : <EmptyPortfolio />
             }
            </Column>
          </Row>
        </PanelBody>
      </Column>
    </Row>
  )
}


export default Portfolio;
