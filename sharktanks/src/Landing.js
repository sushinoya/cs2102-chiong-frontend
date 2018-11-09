import React, { Component } from 'react'
// import './assets/style.min.css'

import {
  getProjects, getProjectWithId, getProjectFunding, getProjectWithStatus, getProjectWithCategory, createUser, getAllKeywords,
  getAllStatuses, getAllCategories, getProjectWithUser,
  deleteProject, createProject, giveDonation, updateUserId, updateProjectId, updateDonationId, addKeyword
} from './Queries'

import { loggedInUser, localLogIn, localLogOut } from './LoginUtil'
import RaisedButton from 'material-ui/RaisedButton'
import OnlyLoggedInComponent from './OnlyLoggedInComponent'
import './assets/landing.css'

class Landing extends Component {
  render() {
    // Check chrome console to make sure correct data is fetched
    console.log(this.state)

    const user = loggedInUser()

    return <div>
        <header class="bg-image">
          <div class="container">
            <h1>SHARKTANKS</h1>
            <h2>Your one stop to discovering the world's most innovative projects.</h2>
            <a href="/projects" class="btn btn-transparent">
              Find Projects!
            </a>
          </div>
        </header>

        <section class="">
          <div class="container">
            <div class="col-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Light-Bulb_icon_by_Till_Teenck_blue.svg/1000px-Light-Bulb_icon_by_Till_Teenck_blue.svg.png" alt="" class="details-img--ball" />
            </div>
            <div class="col-7 details dets">
              <h3>Innovations shape our future.</h3>
              <p>
                By investing in innovations, you don't only secure your future but also pave the path for the future to become the present. You give young minds a chance to make our dreams a reality. Your small contribution will go a long way in changing the world as we know it.
              </p>
            </div>
          </div>
        </section>

        <section class="section--primary">
          <div class="container">
            <div class="col-3 features">
              <i class="fa fa-bolt" />
              <p>Investing is lightning fast! All it takes is a click of a button</p>
            </div>
            <div class="col-3 features">
              <i class="fa fa-bank" />
              <p>We collaborate with the best financial institutions in the world!</p>
            </div>
            <div class="col-3 features">
              <i class="fa fa-heart" />
              <p>We care abotu our entreprenurs and investors!</p>
            </div>
          </div>
        </section>

        <section class="section--primary--alt">
          <div class="container">
            <h3>Use Sharktanks with you everywhere you go.</h3>
            <h6>
              Sharktanks works great both on all platforms which means that you can browse through your favrouite projects on-the-go! No need to go down to project fairs and innovation seminars anymore. Shartanks saves your time!
            </h6>
          </div>
        </section>

        {/* <section class="section--primary--light">
          <div class="container">
            <blockquote class="testimonial">
              <p>Love product. So nice! So good! Could not live without!</p>
              <cite>
                Satisfied Customer
      </cite>
            </blockquote>
          </div>
        </section> */}

        {/* <section class="section--primary--alt bg-image bg-image-2">
          <div class="container text--center">
            <h3>Reasons to buy this product:</h3>
            <div class="col-5 text--left">
              <ul>
                <li>Its the best</li>
                <li>Its awesome</li>
                <li>It makes you happy</li>
                <li>It brings world peace</li>
                <li>Its free!</li>
              </ul>
            </div>
            <div class="col-5 text--left">
              <ul>
                <li>Its the best</li>
                <li>Its awesome</li>
                <li>It makes you happy</li>
                <li>It brings world peace</li>
                <li>Its free!</li>
              </ul>
            </div>
          </div>
        </section> */}

        <section class="text--center">
          <div class="container">
            <h3>Why you still reading?</h3>
            <a href="/projects" class="btn">
            Find Projects!
            </a>
          </div>
        </section>

        {/* <footer>
          <div class="container">
            <ul>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Mainpage</a></li>
            </ul>
            <p>&copy; 2014 dat Company. All rights reserved.</p>
          </div>
        </footer> */}
      </div>;
  }
}

export default Landing