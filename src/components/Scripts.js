import { withPrefix } from "gatsby"
import React, { Component } from "react"
import { Helmet } from "react-helmet"
import $ from "jquery"
import '../../static/js/jquery.dropotron.js'
import breakpoints from '../../static/js/breakpoints.js'
import browser from '../../static/js/browser.js'

class scripts extends Component {
  componentDidMount() {
    this.$el = $(this.el);
    
    breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});
    // Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});
  }


  render(props) {
    return (
      <React.Fragment>
        <div ref={el => this.el = el}></div>
      </React.Fragment>
    )
  }
}
export default scripts