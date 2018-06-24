import React, { Component } from 'react'
import styled from 'styled-components'

const HandlebarDiv = styled.div`
    display: block;
    background-color: #111;
    height: 100%;
    width: .5em;
    z-index: 10;
`
class Handlebar extends Component {
    handleClick( e ) {
        console.log( 'ouch' )
    }
    render() {
        return (
            <HandlebarDiv 
                onClick={ e => this.handleClick( e ) }
            />
        )
    }
}

export default Handlebar