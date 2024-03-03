import * as React from 'react'
import Layout from '../components/common/layout'
import Seo from '../components/common/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle={"About Us"}>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
              <p className="rounded-xl bg-blue-100 text-blue-700 p-8 my-10">Hindflo epitomizes innovation and strives to establish groundbreaking trends within the piping industry. By introducing cutting-edge piping technologies and consistently innovating across both existing and emerging products, Hindflo places a strong emphasis on pushing the boundaries within the industry. This commitment allows the brand to not only raise the bar but also to lead by setting an exemplary standard for others to follow.</p>
              <p className="rounded-xl bg-blue-100 text-blue-700 p-8 mb-10">Hindflo is widely recognized for its unwavering commitment to uncompromised quality, consistently surpassing consumer expectations. From the introduction of groundbreaking piping technologies to the development of innovative brand communications, Hindflo's overarching mission is to uphold and expand its influential presence in the minds of customers. The brand is dedicated to delivering promised values consistently, thereby reinforcing its position as a trusted leader in the piping industry.</p>
              <p className="rounded-xl bg-blue-100 text-blue-700 p-8">Our commitment lies in ensuring customer satisfaction by delivering high-quality plastic pipe solutions through an expansive distribution network, promoting product awareness. We continually enhance manufacturing and operational efficiencies with a system-oriented approach and skilled manpower, aiming for sustained value for customers and stakeholders. Upholding the highest ethical standards in all interactions, we prioritize trust and integrity.</p>
            </div>
          </div>
      </section>
    </Layout>
  )
}

export const Head = () => (<>
  <Seo title="About Us" />
  <meta name="description" content="Your description" />
  </>)

export default AboutPage