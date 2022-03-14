import * as React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => (
  <Helmet
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
    ]}
  />
)

export default Seo
