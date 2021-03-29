import React from "react"
import "../styles/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
