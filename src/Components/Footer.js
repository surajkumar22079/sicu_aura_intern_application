import "./Footer.css";
import React from 'react';
import app_store from "../Images/app_store.png"
import play_store from "../Images/play_store.png"
import fb_icon from "../Images/fb_icon.png";
import linkedin_icon from "../Images/linkedin_icon.png";
import twitter_icon from "../Images/twitter_icon.png";
import location_icon from "../Images/location_icon.png";
import call_icon from "../Images/call_icon.png";
import email_icon from "../Images/email_icon.png";
// import { connect } from 'react-redux'

const Footer = (props) => {
  return (
    <div className="Footer">

      <div className="footer_left">
        <h1 className="company_name">Company Name</h1>
        <h2>Join With Us</h2>
        <div className="email_search_box">
          <input type="email" name="" id="" placeholder="Enter your email address" />
          <button>Sign Up</button>
        </div>
        <h2>Make You check on us</h2>
        <h3>Android & ios we are available on both the platform</h3>
        <div className="app_play_store">
          <img src={app_store} alt="" />
          <img src={play_store} alt="" />
        </div>
      </div>
      <div className="footer_right">
        <div className="right_top">
          <div className="right_top_block">
            <h2>GENERAL</h2>
            <h3>HOME</h3>
            <h3>SHOP</h3>
            <h3>ABOUT</h3>
            <h3>COLLECTIONS</h3>
          </div>
          <div className="right_top_block">
            <h2>LEGAL</h2>
            <h3>FAQs</h3>
            <h3>ABOUT US</h3>
            <h3>PRIVACY & POLICY</h3>
            <h3>TERMS & CONDITIONS</h3>
          </div>
          <div className="right_top_block">
            <h2>CONTACT US</h2>
            <div className="contact_blocks">
              <img src={location_icon} alt="" />
              <h3>COMPANY MARKET  HOUSE,
                10/2 PARK BASE LANE
                CA 94158</h3>
            </div>
            <div className="contact_blocks">
              <a href="tel:+012-345-678"><img src={call_icon} alt="" /></a>
              <h3>012-345-678</h3>
            </div>
            <div className="contact_blocks">
              <a href="mailto:companyname123@gmail.com"><img src={email_icon} alt="" /></a>
              <h3>companyname123@gmail.com</h3>
            </div>
          </div>
        </div>
        <div className="right_bottom">
          <h2>FOLLOW US</h2>
          <div className="social_media_handles">
            <a href="www.facebook.com"><img src={fb_icon} alt="" /></a>
            <a href="www.linkedin.com"><img src={linkedin_icon} alt="" /></a>
            <a href="www.twitter.com"><img src={twitter_icon} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;