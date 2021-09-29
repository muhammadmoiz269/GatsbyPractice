import React from 'react'

import styled from "styled-components"

const FooterStyle = styled.footer `
    text-align: center;
    padding: 1rem;
    background: #0C2461;
    color: #ffff;
`
export default function Footer () {
    return (
        <div >
          <FooterStyle>Muhammad Moiz { new Date().getFullYear()} built with Love</FooterStyle>
            
        </div>
    )
}


