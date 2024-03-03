import * as React from 'react'
import Layout from '../components/common/layout'
import Seo from '../components/common/seo'
import { addressIcon, emailIcon, phoneIcon } from '../components/common/image'

const ContactPage = () => {
  return (
    <Layout pageTitle={"Contact Us"}>
      <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
              <div>
                  <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-xl bg-blue-100">
                      <img className='w-16 h-16' src={emailIcon} alt='Email Icon'/>
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Email us:</h3>
                  <p className="text-gray-500 dark:text-gray-400">Email us for general queries, including marketing and partnership opportunities.</p>
                  <p className="text-blue-700 font-bold">hindflo@gmail.com</p>
              </div>
              <div>
                  <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-xl bg-blue-100">
                      <img className='w-16 h-16' src={phoneIcon} alt='Phone Icon'/>
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Call us:</h3>
                  <p className="text-gray-500 dark:text-gray-400">Call us to speak to a member of our team. We are always happy to help.</p>
                  <p className="text-blue-700 font-bold">+910123456789</p>
              </div>
              <div>
                  <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 rounded-xl bg-blue-100">
                  <img className='w-16 h-16' src={addressIcon} alt='Address Icon'/>                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Address:</h3>
                  <p className="text-gray-500 dark:text-gray-400">Abcdrefg hijk lmn op qrstuv wxyz</p>
              </div>
          </div>
      </div>
    </section>
    </Layout>
  )
}

export const Head = () => (<>
  <Seo title="Contact Us" />
  <meta name="description" content="Your description" />
  </>)

export default ContactPage