import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Navigation from './Components/Navigation/Navigation';
import AuthContainer from './Containers/AuthContainer/AuthContainer';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <AuthContainer/>
      </div>
    </BrowserRouter>);
  }
}

export default App;
