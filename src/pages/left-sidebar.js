import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import { graphql } from "gatsby"
import Layout from '../components/layout'

// markup
const leftSideBarPage = ({ data }) => {
  return (
    <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <article id="main">

					<header className="special container">
						<span className="icon solid fa-laptop"></span>
						<h2>Behold the <strong>Left Sidebar</strong></h2>
						<p>Where things on the left ... accompany that on the right.</p>
					</header>

						<section className="wrapper style4 container">

							<div className="row gtr-150">
								<div className="col-4 col-12-narrower">

										<div className="sidebar">
											<section>
												<header>
													<h3>Magna Feugiat</h3>
												</header>
												<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit..</p>
												<footer>
													<ul className="buttons">
														<li><a href="#" className="button small">Learn More</a></li>
													</ul>
												</footer>
											</section>

											<section>
												<a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
												<header>
													<h3>Amet Lorem Tempus</h3>
												</header>
												<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
												<footer>
													<ul className="buttons">
														<li><a href="#" className="button small">Learn More</a></li>
													</ul>
												</footer>
											</section>
										</div>

								</div>
								<div className="col-8 col-12-narrower imp-narrower">

										<div className="content">
											<section>
												<a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
												<header>
													<h3>Dolore Amet Consequat</h3>
												</header>
												<p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum massa. Morbi eu faucibus massa. Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam.</p>
												<p>Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum porta cursus justo. Quisque ultricies lorem in ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna. Nullam eget lobortis purus. Phasellus vitae tortor non est placerat tristique. Sed id sem et massa ornare pellentesque. Maecenas pharetra porta accumsan. </p>
												<p>In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in odio vulputate luctus. Suspendisse euismod lorem eget lacinia fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam. Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus, non hendrerit ipsum arcu tristique est.</p>
											</section>
										</div>

								</div>
							</div>
						</section>

						<section className="wrapper style1 container special">
							<div className="row">
								<div className="col-4 col-12-narrower">

									<section>
										<header>
											<h3>This is Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
										<footer>
											<ul className="buttons">
												<li><a href="#" className="button small">Learn More</a></li>
											</ul>
										</footer>
									</section>

								</div>
								<div className="col-4 col-12-narrower">

									<section>
										<header>
											<h3>Also Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
										<footer>
											<ul className="buttons">
												<li><a href="#" className="button small">Learn More</a></li>
											</ul>
										</footer>
									</section>

								</div>
								<div className="col-4 col-12-narrower">

									<section>
										<header>
											<h3>Probably Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
										<footer>
											<ul className="buttons">
												<li><a href="#" className="button small">Learn More</a></li>
											</ul>
										</footer>
									</section>

								</div>
							</div>
						</section>

				</article>
        </Layout>
  )
}

export default leftSideBarPage

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