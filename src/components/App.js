import React, { Component, ReactPropTypes } from 'react';
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;
