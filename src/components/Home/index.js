import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLogged: false}

  onClicked = () => {
    this.setState(prevState =>
      prevState.isLogged ? {isLogged: false} : {isLogged: true},
    )
  }

  render() {
    const {isLogged} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Logout logout={this.onClicked} />
          ) : (
            <Login login={this.onClicked} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
