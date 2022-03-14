import * as React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "../../font/stylesheet.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: #000;
    color: #fff;
  }
`

const MainContentWrapper = styled.main``

const Wrapper = styled.div`
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <MainContentWrapper>{children}</MainContentWrapper>
      <Footer />
    </Wrapper>
  </>
)

export default Layout
