import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import DefaultText from '../data/default-text'

const PanelContainer = styled.div`
    display: block;
    position: relative;
        height: 100%;
        width: ${ props => props.width }
        padding: 1em;
    background-color: ${ props => props.backgroundColor }
    font-family: "Avenir Next";
    overflow-wrap: break-word;
    overflow-y: scroll;
`
const Editor = styled.textarea`
    position: relative;
        height: 100%;
        width: 100%;
    border: none;
    font-family: "Roboto Mono";
    font-size: 14pt;
    outline: none;
    resize: none;
`
const Panel = props => {
    const editor = props.type === 'editor' ? 
        <Editor id="editor" placeholder={ DefaultText } /> : null
    const markdown = props.preview ? <ReactMarkdown source={ props.preview } /> : null
    return (
        <PanelContainer 
            backgroundColor={ props.backgroundColor }
            type={ props.type }
            onChange={ editor ? props.handleChange : null }
            width={ props.width }
        >
            { markdown }
            { editor }
        </PanelContainer>
    )
}

export default Panel