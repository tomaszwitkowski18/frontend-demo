import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterWrapper = styled.footer`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`

const LinkToOuterWebsite = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  margin-left: 3px;
`

const LinkToContact = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  margin-left: 3px;
`

const FooterLeftSide = styled.div``

const FooterRightSide = styled.div``

const Footer = () => (
  <FooterWrapper>
    <FooterLeftSide>
      <LinkToContact to={"contact"}>Kontakt</LinkToContact>
    </FooterLeftSide>
    <FooterRightSide>
      Made with love by
      <LinkToOuterWebsite
        href={"http://tomekwitkowski.pl/"}
        title={"I tak nic tu nie ma"}
      >
        Tomek Witkowski
      </LinkToOuterWebsite>
    </FooterRightSide>
  </FooterWrapper>
)

export default Footer
