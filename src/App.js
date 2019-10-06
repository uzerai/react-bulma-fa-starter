import React, { Component } from 'react';
import Layout from './layouts/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout></Layout>
      </Router>
    );
  }
}

export default App;
