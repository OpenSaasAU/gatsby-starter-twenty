import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Form from '../components/Form'

// markup
const ContactPage = ({ data }) => {
  return (
    <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <article id="main">
    <section class="wrapper style4 special container medium">

					<header class="special container">
						<span class="icon solid fa-envelope"></span>
						<h2>Get In Touch</h2>
						<p>Use the form below to give /dev/null a piece of your mind.</p>
					</header>
						<section class="wrapper style4 special container medium"></section>
    <Form />
    </section>

				</article>
    </Layout>
  )
}

export default ContactPage
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
