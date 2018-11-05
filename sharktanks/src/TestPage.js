import React, { Component } from 'react'
import './assets/style.min.css'
import { getProjects } from './Queries'

class TestPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }

  componentWillMount() {
    // Test your query here and set the result to be the state
    getProjects().then(res => {
      this.setState({ data: res.data })
    })
  }

  render() {
    // Check chrome console to make sure correct data is fetched
    console.log(this.state)

    // It should also print on the test page
    return (
      <>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </>
    )
  }
}

export default TestPage
