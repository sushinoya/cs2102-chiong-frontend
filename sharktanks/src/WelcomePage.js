import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Login from './Login'
import Register from './Register'
import formStyles from './FormStyles.module.scss'

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
      loginmessage = 'Already have an account?'
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: 'Login',
        isLogin: false,
      })
    } else {
      var loginscreen = []
      loginscreen.push(<Login parentContext={this} />)
      loginmessage = 'Do not have an account yet?'
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
    var loginmessage = "Do not have an account yet?";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage,
    })
  }
  render() {
    return <div className={formStyles.flexCenter}>
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <RaisedButton label={this.state.buttonLabel} style={style} onClick={event => this.handleClick(event)} />
        </div>
      </div>;
  }
}
const style = {
  margin: 15,
}
export default WelcomePage
