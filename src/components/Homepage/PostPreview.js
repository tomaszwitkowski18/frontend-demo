import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Title = styled.h2`
  margin: 0 0 10px 0;
`

const Content = styled.div``

const LinkToPost = styled(Link)`
  display: block;
  border: 1px dashed #fff;
  padding: 20px;
  color: #fff;
  text-decoration: none;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const PostPreview = ({ data }) => (
  <LinkToPost to={`/posts/${data.slug}`}>
    <Title>{data.title}</Title>
    <Content
      dangerouslySetInnerHTML={{
        __html: `${data.content
          .replace(/<\/?[^>]+(>|$)/g, "")
          .substring(0, 100)}...`,
      }}
    />
  </LinkToPost>
)

export default PostPreview
