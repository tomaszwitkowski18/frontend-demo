import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/LayoutComponents/Layout"
import Slider from "../components/Homepage/Slider"
import PostPreview from "../components/Homepage/PostPreview"
import Seo from "../components/SEO/Seo"
import styled from "styled-components"

const Title = styled.h1``

const PostsCase = styled.div``

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetHomepageData {
          wpcontent {
            page(id: "15", idType: DATABASE_ID) {
              template {
                ... on WPGraphQL_Template_Home {
                  homepage {
                    slider {
                      image {
                        sourceUrl(size: LARGE)
                      }
                    }
                  }
                }
              }
            }
            posts {
              nodes {
                id
                title
                content
                slug
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <Seo title={"Homepage"} description={"Static SEO description"} />
          <Slider
            slidesPerView={1}
            sliderImages={data.wpcontent.page.template.homepage.slider}
          />
          <PostsCase>
            <Title>Posty:</Title>
            {data.wpcontent.posts.nodes.map(el => (
              <PostPreview data={el} key={el.id} />
            ))}
          </PostsCase>
        </Layout>
      )}
    />
  )
}

export default IndexPage
