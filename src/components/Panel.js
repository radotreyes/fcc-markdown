import React from 'react'
import styled from 'styled-components'

const PanelContainer = styled.div`
    position: relative;
    display: block;
    height: 100%;
    width: ${ props => props.width }
    background-color: ${ props => props.backgroundColor }
    overflow: hidden;
`
const Editor = styled.textarea`
    position: relative;
    height: 100%;
    width: 100%;
    font-family: "Roboto Mono";
    font-size: 14pt;
    resize: none;
`
const Panel = props => {
    const editor = props.type === 'editor' ? <Editor id="editor" /> : props.preview
    return (
        <PanelContainer 
            backgroundColor={ props.backgroundColor }
            onChange={ editor ? props.handleChange : null }
            width={ props.width }
        >
            { editor }
        </PanelContainer>
    )
}

export default Panel