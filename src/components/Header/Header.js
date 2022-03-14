import * as React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import Menu from "./Menu"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Menu />
  </HeaderWrapper>
)

export default Header
