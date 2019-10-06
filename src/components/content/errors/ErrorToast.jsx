import React, { Component } from 'react';

/**
 * A Page component for representing a user dashboard for authorized users.
 *
 * Includes a message list and several separate tables.
 */
class ErrorToast extends Component {

  state = { errors: [], errorInfo: null, lifetime: 0 };

  componentDidMount() {
    const {lifetime, errors} = this.props;

    this.setState({
      lifetime: lifetime ? lifetime : 5,
      errors: errors | []
    })
  }

  render() {
    let { errors, show } = this.state;
    const { children } = this.props;

    return (
      <>
      { children }
        <div id={"error-bar " + (show ? "show" : "")} >
          <div className="container">
            <div className="error-space">
              {
                errors.map(error =>
                  <Error error={{ name: "hey", message: "heyoo" }} />
                )
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ErrorToast;
