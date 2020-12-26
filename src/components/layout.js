import React from 'react'
import '../assets/scss/main.scss'
import Header from './Header'
import { withPrefix } from "gatsby"
import {Helmet} from 'react-helmet'
import Footer from './Footer'

const Template = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
    <Helmet>
        <script src={withPrefix('../../js/jquery.min.js')} type="text/javascript" />
        <script src={withPrefix('../../js/jquery.scrollex.min.js')} type="text/javascript" />
        <script src={withPrefix('../../js/jquery.scrolly.min.js')} type="text/javascript" />
        <script src={withPrefix('../../js/browser.min.js')} type="text/javascript" />
        <script src={withPrefix('../../js/jquery.dropotron.min.js')} type="text/javascript" />
        <script src={withPrefix('../../js/breakpoints.min.js')} type="text/javascript" />
        <script src={withPrefix('../../js/util.js')} type="text/javascript" />
        <script src={withPrefix('../../js/main.js')} type="text/javascript" />
    </Helmet>
  </div>
)

export default Template
