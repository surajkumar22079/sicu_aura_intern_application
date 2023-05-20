import "./Navbar.css";
import React from 'react';
import logo from "../Images/Logo.png";
// import { connect } from 'react-redux'

const Navbar = (props) => {
  return (
    <div className="nav"> 
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar">
        <a href="/home" className="nav_block">Home</a>
        <a href="/career" className="nav_block">Career</a>
        <a href="/about" className="nav_block">About</a>
        <a href="/who_we_are" className="nav_block">Who we’re</a>
        <a href="/what_we_do" className="nav_block">What we do</a>
        <a href="/contact_us" className="nav_block">Contact Us</a>
      </div>

    </div>
  )
}

export default Navbar;