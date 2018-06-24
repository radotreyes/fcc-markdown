import React, { Component } from 'react'
import Handlebar from './components/Handlebar'
import Panel from './components/Panel'
import './App.css'

class App extends Component {
  handleMouseMove( e ) {
    console.log( e.clientX )
  }

  render() {
    return (
      <div className="App" onMouseMove={ e => this.handleMouseMove( e ) }>
        <div className="flex-container">
          <Panel 
            backgroundColor="blue" 
            initialWidth="30%"
          />
          <Handlebar />
          <Panel
            backgroundColor="red"
            initialWidth="70%"
          />
        </div>
      </div>
    );
  }
}

export default App;
