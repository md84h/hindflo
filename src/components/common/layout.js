import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {container, heading, navLinks,
  navLinkItem,
  navLinkText} from './layout.module.css'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        id
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout