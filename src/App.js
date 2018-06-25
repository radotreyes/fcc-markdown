import React, { Component, createRef } from 'react'
import Footer from './components/Footer'
import Handlebar from './components/Handlebar'
import Panel from './components/Panel'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.ref = createRef() // create a reference to the element's DOM node
    this.state = {
      markdown: null,
      mouseX: null,
      resize: false,
      width: null,
    }
  }

  handleChange( e ) {
    e.preventDefault()
    this.setState({
      markdown: e.target.value
    })
  }
  handleMouseDown( e ) {
    e.preventDefault()
    this.setState({
      clicked: true
    })
  }
  handleMouseUp( e ) {
    e.preventDefault()
    this.setState({
      clicked: false
    })
  }
  handleMouseMove( e ) {
    if( this.state.clicked ) {
      this.setState( {
        mouseX: e.clientX
      } )
    }
  }
  handleWindowResize() {
    this.setState( {
      width: window.innerWidth
    } )
  }

  componentDidMount() {
    this.handleWindowResize()
  }

  componentDidUpdate() {
    if( this.state.width !== window.innerWidth ) {
      this.handleWindowResize()
    }
  }
  

  render() {
    const firstPanelWidth = ( Math.round( this.state.mouseX / this.state.width * 10000 ) / 100 || 30 ) - .5
    const secondPanelWidth = 100 - firstPanelWidth - .5
    return (
      <div 
        className="App" 
        onMouseMove={ e => this.handleMouseMove( e ) }
        ref={ this.ref } 
      >
        <div className="flex-container">
          <Panel 
            backgroundColor="#ccc"
            type="preview"
            preview={ this.state.markdown }
            width={ `${ firstPanelWidth }%` }
          />
          <Handlebar 
            clicked={ this.state.clicked }
            handleMouseDown={ e => this.handleMouseDown( e ) }
            handleMouseUp={ e => this.handleMouseUp( e ) }
          />
          <Panel
            backgroundColor="white"
            handleChange={ e => this.handleChange( e ) }
            type="editor"
            width={ `${ secondPanelWidth }%` }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
