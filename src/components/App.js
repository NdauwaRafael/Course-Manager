import React, { Component} from 'react';
import Header from './Layout/Header';
import Routes from '../routes';
import Spinner from './Common/Loaders/Spinner'
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
          <Spinner />
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
