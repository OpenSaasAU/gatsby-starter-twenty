// gatsby-browser.js


export const onClientEntry = () => {
    window.onload = () => { 
        console.log('window loaded Gatsby')
     }
  }