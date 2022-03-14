import * as React from "react"
import styled from "styled-components"
import Layout from "../components/LayoutComponents/Layout"
import Seo from "../components/SEO/Seo"

const PostTitle = styled.h1``

const Content = styled.div``

const Post = ({ pageContext }) => (
  <Layout>
    <Seo
      title={pageContext.product.title}
      description={pageContext.product.content.replace(/<\/?[^>]+(>|$)/g, "")}
    />
    <PostTitle>{pageContext.product.title}</PostTitle>
    <Content
      dangerouslySetInnerHTML={{
        __html: pageContext.product.content,
      }}
    />
  </Layout>
)

export default Post
