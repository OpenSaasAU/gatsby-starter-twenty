import React from 'react'
import '../assets/scss/main.scss'
import Header from './Header'
import Footer from './Footer'
import Scripts from './Scripts'

const Template = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
    <Scripts />
  </div>
)

export default Template
