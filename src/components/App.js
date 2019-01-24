import React, { Component} from 'react';
import Header from './Layout/Header';
import Routes from '../routes'
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="container mx-auto pt-10">
          {
            Routes
          }
        </div>
      </div>
    );
  }
}

export default App;
