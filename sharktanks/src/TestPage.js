import React, { Component } from 'react'
import './assets/style.min.css'

import { getProjects, getProjectWithId, getProjectFunding, getProjectWithStatus, getProjectWithCategory, createUser, getAllKeywords, 
getAllStatuses, getAllCategories, getProjectWithUser, 
deleteProject, createProject, giveDonation, updateUserId, updateProjectId, updateDonationId, addKeyword } from './Queries'

import { loggedInUser, localLogIn, localLogOut } from './LoginUtil'
import RaisedButton from 'material-ui/RaisedButton'
import OnlyLoggedInComponent from './OnlyLoggedInComponent'

class TestPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }

  componentWillMount() {
    // Test your query here and set the result to be the state
    // addKeyword("penis").then((res) => {
    //   this.setState({ data: res.data })
    // })
    getProjectWithId(1).then((data) => {
      this.setState({ data: data.data });
    })
  }

  rerenderComponent = () => {
    this.setState({ dummy: 'dummy' })
  }

  render() {
    // Check chrome console to make sure correct data is fetched
    console.log(this.state)

    const user = loggedInUser()

    // It should also print on the test page
    return (
      <>
        {console.log('Logged in User:')}
        {console.log(user)}

        <pre>{JSON.stringify(user, null, 2)}</pre>

        <RaisedButton
          label="Logout"
          primary={true}
          onClick={() => {
            localLogOut()
            this.rerenderComponent()
          }}
        />

        <RaisedButton
          label="Log In Ahan"
          primary={true}
          onClick={() => {
            localLogIn({
              emailaddress: 'ahangupta.96@gmail.com',
              userid: 1,
              name: 'Ahan Gupta',
              role: 'Entrepreneur',
            })

            this.rerenderComponent()
          }}
        />
        {console.log('return data from request')}
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        {console.log('return data from request')}

      </>
    )
  }
}

export default TestPage
