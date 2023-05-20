import "./Home_page.css";
import React from 'react'
// import { connect } from 'react-redux'
import home_page_image from '../Images/home_page_image.png';
import Job_card from "./Job_card";
import search_icon from "../Images/search_icon.png";

const Home_page = (props) => {
  return (
    <div className="home_page">
      <div className="upper">
        <p className="upper_para1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor ratione temporibus quod. Facere sunt veritatis porro nemo saepe unde sit fugiat sed, reiciendis ratione provident, hic, </p>
        <img src={home_page_image} alt="" />
      </div>
      <h2 className="search_for_open_role">Search For Open Role</h2>
      <p className="upper_para2">Lorem ipsum dolor sit amet consectetur. Amet diam ipsum suspendisse gravida. Metus sit habitant amet quam risus eget consequat.</p>
      <form action="/submit" method="get" className="form_job">
        <div className="search_job">
          <div className="search_job_block">
            <div className="filter_block">
              <label htmlFor="job_title">Job Title</label>
              <input type="text" name="job_title" id="job_title" placeholder="Search by Job Title"/>
            </div>
            <div className="filter_block">
              <label htmlFor="department">Department</label>
              <select name="department" id="department"placeholder="Select department" className="select_form">
                <option value="">Select Department </option>
                <option value="">Option A</option>
                <option value="">Option B</option>
                <option value="">Option C</option>
                <option value="">Option D</option>
              </select>
            </div>
            <div className="filter_block">
              <label htmlFor="department">Location</label>
              <select name="department" id="department" placeholder="Select Location" className="select_form">
                <option value="">Select Location </option>
                <option value="">Option A</option>
                <option value="">Option B</option>
                <option value="">Option C</option>
                <option value="">Option D</option>
              </select>
            </div>
            <div className="search_icon">
              <img src={search_icon} alt="" />
            </div>
          </div>
        </div>
        <Job_card heading = "Sales Manager" location = "Delhi" start_time = "5" end_time = "10"/>
        <Job_card heading = "Junior Sales Manager" location = "Kolkata" start_time = "3" end_time = "5"/>
        <Job_card heading = "Frontend Developer" location = "Mumbai" start_time = "1" end_time = "3"/>
        <Job_card heading = "Full Stack Developer" location = "Delhi" start_time = "5" end_time = "10"/>
        <Job_card heading = "Sales Manager" location = "Delhi" start_time = "5" end_time = "10"/>

      </form>


      
    </div>
  )
}

export default Home_page;