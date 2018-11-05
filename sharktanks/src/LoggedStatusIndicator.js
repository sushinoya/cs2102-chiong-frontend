import React, { Component } from 'react'
import './assets/style.min.css'
import { getProjects } from './Queries'
import { loggedInUser, localLogIn, localLogOut } from './LoginUtil'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import styles from './LoggedStatusIndicator.module.scss'

class LoggedStatusIndicator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }

  render() {
    // Check chrome console to make sure correct data is fetched
    console.log(this.state)

    const user = loggedInUser()

    const logOutButton = (
      <RaisedButton
        label="Log Out"
        primary={true}
        onClick={() => {
          localLogOut()
          this.rerenderComponent()
        }}
      />
    )

    const logInButton = (
      <Link to="/login">
        <RaisedButton label="Log In" primary={true} />{' '}
      </Link>
    )

    const displayed = user ? (
      <div className={styles.sameLine}>
        <p className={styles.noMargin}>{user.name}</p> {logOutButton}{' '}
      </div>
    ) : (
      <div className={styles.sameLine}>
        <h6>&nbsp;</h6>
        {logInButton}
      </div>
    )

    // It should also print on the test page
    return <>{displayed}</>
  }
}

export default LoggedStatusIndicator
