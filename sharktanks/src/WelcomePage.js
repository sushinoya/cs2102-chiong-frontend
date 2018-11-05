import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Login from './Login'
import Register from './Register'

class WelcomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginscreen: [],
      loginmessage: '',
      buttonLabel: 'Register',
      isLogin: true,
    }
  }

  handleClick = event => {
    var loginmessage
    if (this.state.isLogin) {
      var loginscreen = []
      loginscreen.push(<Register parentContext={this} />)
      loginmessage = 'Already registered.Go to Login'
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: 'Login',
        isLogin: false,
      })
    } else {
      var loginscreen = []
      loginscreen.push(<Login parentContext={this} />)
      loginmessage = 'Not Registered yet.Go to registration'
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: 'Register',
        isLogin: true,
      })
    }
  }

  componentWillMount() {
    var loginscreen = []
    loginscreen.push(
      <Login parentContext={this} appContext={this.props.parentContext} />
    )
    var loginmessage = 'Not registered yet, Register Now'
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage,
    })
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <div>
            <RaisedButton
              label={this.state.buttonLabel}
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </div>
      </div>
    )
  }
}
const style = {
  margin: 15,
}
export default WelcomePage
