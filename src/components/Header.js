
import React, { useState, useRef, useMemo, Fragment } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Navbar, Content, Footer } from '../styles'

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const rendersCount = useRef(0)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (currPos.y > -508) {
        setHideOnScroll(false)
      } else {
        setHideOnScroll(true)
      }
    },
    [hideOnScroll],
    false,
    false,
    300
  )
return useMemo( () => (
  <Navbar show={hideOnScroll}>
  <header id="header">
					<h1 id="logo"><a href="#">Twenty <span>by HTML5 UP</span></a></h1>
					<nav id="nav">
						<ul>
							<li className="current"><a href="#">Welcome</a></li>
							<li className="submenu">
								<a href="#">Layouts</a>
								<ul>
									<li><a href="left-sidebar">Left Sidebar</a></li>
									<li><a href="right-sidebar">Right Sidebar</a></li>
									<li><a href="no-sidebar">No Sidebar</a></li>
									<li><a href="contact">Contact</a></li>
									<li className="submenu">
										<a href="#">Submenu</a>
										<ul>
											<li><a href="#">Dolore Sed</a></li>
											<li><a href="#">Consequat</a></li>
											<li><a href="#">Lorem Magna</a></li>
											<li><a href="#">Sed Magna</a></li>
											<li><a href="#">Ipsum Nisl</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li><a href="#" className="button primary">Sign Up</a></li>
						</ul>
					</nav>
  </header>
  </Navbar>
),
[hideOnScroll]
)
}
