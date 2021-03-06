import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import { graphql } from "gatsby"
import Layout from '../components/layout'

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <section id="banner">

					<div className="inner">

						<header>
							<h2>TWENTY</h2>
						</header>
						<p>This is <strong>Twenty</strong>, a free
						<br />
						responsive template
						<br />
						by <a href="http://html5up.net">HTML5 UP</a>.</p>
						<footer>
							<ul className="buttons stacked">
								<li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
							</ul>
						</footer>

					</div>

				</section>

				<article id="main">

					<header className="special container">
						<span className="icon solid fa-chart-bar"></span>
						<h2>This is the <strong>Twenty</strong> theme from HTML5 UP
						<br />
						converted to gatsby and running on Azure Static webapps</h2>
						<p>Checkout the code on <a href="https://github.com/OpenSaasAU/gatsby-starter-twenty"><strong>Opensaas</strong> Github</a>
						<br />
						Or to get started run <br />'gatsby new my-gatsby-project https://github.com/opensaasau/gatsby-starter-twenty'
						<br />
						Have fun!</p>
					</header>

						<section className="wrapper style2 container special-alt">
							<div className="row gtr-50">
								<div className="col-8 col-12-narrower">

									<header>
										<h2>Behold the <strong>icons</strong> that visualize what you’re all about. or just take up space. your call bro.</h2>
									</header>
									<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit amet. Sed tristique purus vitae volutpat ultrices. eu elit eget commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo.</p>
									<footer>
										<ul className="buttons">
											<li><a href="#" className="button">Find Out More</a></li>
										</ul>
									</footer>

								</div>
								<div className="col-4 col-12-narrower imp-narrower">

									<ul className="featured-icons">
										<li><span className="icon fa-clock"><span className="label">Feature 1</span></span></li>
										<li><span className="icon solid fa-volume-up"><span className="label">Feature 2</span></span></li>
										<li><span className="icon solid fa-laptop"><span className="label">Feature 3</span></span></li>
										<li><span className="icon solid fa-inbox"><span className="label">Feature 4</span></span></li>
										<li><span className="icon solid fa-lock"><span className="label">Feature 5</span></span></li>
										<li><span className="icon solid fa-cog"><span className="label">Feature 6</span></span></li>
									</ul>

								</div>
							</div>
						</section>

						<section className="wrapper style1 container special">
							<div className="row">
								<div className="col-4 col-12-narrower">

									<section>
										<span className="icon solid featured fa-check"></span>
										<header>
											<h3>This is Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
								<div className="col-4 col-12-narrower">

									<section>
										<span className="icon solid featured fa-check"></span>
										<header>
											<h3>Also Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
								<div className="col-4 col-12-narrower">

									<section>
										<span className="icon solid featured fa-check"></span>
										<header>
											<h3>Probably Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
							</div>
						</section>

						<section className="wrapper style3 container special">

							<header className="major">
								<h2>Next look at this <strong>cool stuff</strong></h2>
							</header>

							<div className="row">
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
										<header>
											<h3>A Really Fast Train</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
										<header>
											<h3>An Airport Terminal</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
							</div>
							<div className="row">
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
										<header>
											<h3>Hyperspace Travel</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
										<header>
											<h3>And Another Train</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
							</div>

							<footer className="major">
								<ul className="buttons">
									<li><a href="#" className="button">See More</a></li>
								</ul>
							</footer>

						</section>

				</article>

				<section id="cta">

					<header>
						<h2>Ready to do <strong>something</strong>?</h2>
						<p>Proin a ullamcorper elit, et sagittis turpis integer ut fermentum.</p>
					</header>
					<footer>
						<ul className="buttons">
							<li><a href="#" className="button primary">Take My Money</a></li>
							<li><a href="#" className="button">LOL Wut</a></li>
						</ul>
					</footer>

				</section>
        </Layout>
  )
}

export default IndexPage
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