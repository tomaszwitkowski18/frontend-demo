import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoImage = styled.img`
  max-width: 200px;
`

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetLogo {
          wpcontent {
            myOptionsPage {
              themeGeneralSettings {
                logo {
                  sourceUrl(size: LARGE)
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Link to={"/"}>
          <LogoImage
            src={
              data.wpcontent.myOptionsPage.themeGeneralSettings.logo.sourceUrl
            }
          />
        </Link>
      )}
    />
  )
}

export default IndexPage
