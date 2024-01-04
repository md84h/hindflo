import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import ProductSection from '../components/ProductSection'

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <HeroSection />
      <FeatureSection />
      <ProductSection />
    </Layout>
  )
}

export const Head = () => <Seo title={"Home Page"} />

export default IndexPage