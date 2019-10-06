import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../../pages/Welcome'

/**
 * This component manages routing to the different pages of the application.
 * Register new page components here with private routes if they should not be publicly available.
 */
class PageRouter extends Component {
  render() {
    return <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  }
}

export default PageRouter;
