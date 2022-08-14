import React from 'react'
import './Brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'


const Brand = () => {
  return (
    <div className='gpt3__Brand'>

      <p><img src={google} alt=" Google" /></p>
      <p><img src={slack} alt=" slack" /></p>
      <p><img src={atlassian} alt=" atlassian" /></p>
      <p><img src={dropbox} alt=" dropbox" /></p>
      <p><img src={shopify} alt=" shopify" /></p>

    </div>
  )
}

export default Brand
