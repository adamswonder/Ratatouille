import React from 'react'
import '../index.css'
import { RiInstagramFill,RiFacebookCircleFill } from "react-icons/ri"
import { AiFillTwitterCircle } from "react-icons/ai"

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div>
        <h1> RATATOULIE </h1>
        <p>Find and share everyday cooking inspiration on Allrecipes.<br/> Discover recipes, cooks, videos, and<br/> how-tos based on the food you love and the friends you follow</p>
        </div>
        <section>
            <ul>
                <h3>INFORMATION</h3>
                <li>Features</li>
                <li>News Blog</li>
                <li>Terms & conditions</li>
                <li>Contact us</li>
                <li>About us</li>
            </ul>
        </section>
        <section>
            <ul>
                <h3>YOUR ACCOUNT</h3>
                <li>Your Account</li>
                <li>Personal Information</li>
            </ul>
        </section>

        <section>
            <ul>
                <h3>CONTACTS</h3>
                <li>Contact Support</li>
                <li> TEL: +25411001012</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
            </ul>
        </section>
    </div> <hr />
    <div style={{display: "flex", justifyContent: "center"}}>
        <p> &copy; <strong>2022 RATATOULIE, Kenya. All rights reserved.</strong></p>
    </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
            <RiInstagramFill style={{ color: '#F94223', fontSize: '35px' }} />&nbsp;
            <AiFillTwitterCircle style={{ color: '#F94223', fontSize: '35px' }} />&nbsp;
            <RiFacebookCircleFill style={{ color: '#F94223', fontSize: '35px' }} />&nbsp;
        </div>
</footer>
  )
}

export default Footer