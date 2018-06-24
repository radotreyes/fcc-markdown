import React, { Component } from 'react'
import styled from 'styled-components'

const PanelContainer = styled.div`
    display: block;
    height: 100%;
    width: ${ props => props.width }
    background-color: ${ props => props.backgroundColor }
    overflow-wrap: break-word;
`
class Panel extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            width: this.props.initialWidth
        }
    }
    render() {
        return(
            <PanelContainer 
                backgroundColor={ this.props.backgroundColor }
                width={ this.state.width }
            >
                &nbsp;
            </PanelContainer>
        )
    }
}

export default Panel