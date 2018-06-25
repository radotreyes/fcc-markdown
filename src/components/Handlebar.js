import React, { Component } from 'react'
import styled from 'styled-components'

const HandlebarDiv = styled.div`
    position: relative;
    display: block;
    padding: 1em 0;
    background-color: ${ props => props.clicked ? '#0ff' : '#222' }
    height: 100%;
    width: 1%;
    z-index: 100;
`
class Handlebar extends Component {
    constructor( props ) {
        super( props )
        console.log( this.props.handleClick )
    }
    render() {
        return (
            <HandlebarDiv
                // onMouseLeave={ this.props.handleMouseLeave }
                onMouseDown={ this.props.handleMouseDown }
                onMouseUp={ this.props.handleMouseUp } 
                clicked={ this.props.clicked }
            />
        )
    }
}

export default Handlebar