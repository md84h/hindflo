import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/common/layout'
import Seo from '../components/common/seo'

const ContactPage = () => {
  return (
    <Layout pageTitle={"Contact us"}>
      <p>{"Contact us page"}</p>
    </Layout>
  )
}

export const Head = () => (<>
  <Seo title="Contact us" />
  <meta name="description" content="Your description" />
  </>)

export default ContactPage