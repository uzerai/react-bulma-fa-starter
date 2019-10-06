import React, { Component } from 'react';
import Navigation from '../components/nav/Navigation';
import PageRouter from '../components/routes/PageRouter';
import Footer from '../components/footer/Footer';

class Layout extends Component {
  render() {
    return (
      <>
        <div name="app" className="app-main-window">
          <Navigation></Navigation>
          <div className="main-content" name="main-content" role="main">
            {/* Main content is rendered here (handled by PageRouter) */}
            <PageRouter></PageRouter>
          </div>
          <Footer></Footer>
        </div>
      </>
    );
  }
}

export default Layout;
