import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
    display: block;
    position: relative;
        height: 5vh;
        padding: 1em 0;
    background-color: #222;
    color: #eee;
    font-family: "Avenir Next";
    font-size: 1em;
    line-height: 5vh;
    text-align: center;
`

const VerticalAligned = styled.div`
    position: relative;
    top: 60%;
    transform: translateY( -50% );
`

const Footer = () => {
    return (
        <FooterDiv>
            <VerticalAligned>Made for freeCodeCamp by Reuben Reyes</VerticalAligned>
        </FooterDiv>
    )
}

export default Footer