import React, { Component } from 'react'
import './assets/style.min.css'
import { loggedInUser, localLogIn, localLogOut } from './LoginUtil'
import { Link } from 'react-router-dom'

class OnlyLoggedInComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }

  render() {
    const user = loggedInUser()
    const content = user ? (
      this.props.children
    ) : (
      <p>
        Please <Link to="/login">Log In</Link> to continue
      </p>
    )
    return <div className="contain-everything ">{content}</div>
  }
}

export default OnlyLoggedInComponent
