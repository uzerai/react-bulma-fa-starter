import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/**
 * Private route link which will on click render component or
 * a redirect to /login depending on given expression.
 *
 * ...rest should contain any Route specific props.
 *
 * @param {component, expression, ...rest} param0
 */
export const PrivateRoute = ({ component: Component, expression, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        (expression)
        ? (<Component {...props} />)
        : (<Redirect to="/login" />)
      )}
    }
  />
)