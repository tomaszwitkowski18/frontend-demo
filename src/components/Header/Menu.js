import * as React from "react"
import styled from "styled-components"
import { graphql, Link, StaticQuery } from "gatsby"

const NaviagationWrapper = styled.nav``

const MenuMainElement = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`

const MenuSingleElement = styled.li``

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
`

const Menu = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetMenu {
          wpcontent {
            menu(id: "dGVybToyOA==", idType: ID) {
              menuItems {
                nodes {
                  url
                  label
                  id
                }
              }
            }
          }
        }
      `}
      render={data => (
        <NaviagationWrapper>
          <MenuMainElement>
            {data.wpcontent.menu.menuItems.nodes.map(el => (
              <MenuSingleElement key={el.id}>
                <MenuLink
                  to={
                    el.url.includes("homepage") ? "/" : el.url.split("/").pop()
                  }
                >
                  {el.label}
                </MenuLink>
              </MenuSingleElement>
            ))}
          </MenuMainElement>
        </NaviagationWrapper>
      )}
    />
  )
}

export default Menu
