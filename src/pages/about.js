import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/common/layout'
import Seo from '../components/common/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle={"About Me"}>
      <p>{"Hi there! I'm the proud creator of this site, which I built with Gatsby."}</p>
    </Layout>
  )
}

export const Head = () => (<>
  <Seo title="About Me" />
  <meta name="description" content="Your description" />
  </>)

export default AboutPage