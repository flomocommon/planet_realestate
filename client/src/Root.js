import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import { routes } from './utils/navigation'

const RouteConfig = (props) => {
  return (
    <App>
      <Router>
        <Switch>
          {routes.map(
            ({ view, ...routeProps}) =>
              <WrappedRoute key={`route-${view}`} {...routeProps} />)
          }
        </Switch>
      </Router>
    </App>
  );
}

const WrappedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route render={props => <Component {...props} {...rest}  />} />
  )
}

export default RouteConfig
