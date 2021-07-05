import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css?raw'
import Client from './Client'
import App from '../App'
import Linechart from './Linechart'
import Login from './login'
import Register from './Register'
import Forgot from './Forgot'
import React from 'react'
import ForgotScreen1 from './ForgotScreen1'
import ForgotScreen2 from './ForgotScreen2'
class Routing extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      validateUser: ''
    }
  }

  componentDidMount = () => {
    this.setState({ validateUser: localStorage.getItem('validUser') })
  }

  render () {
    const validateUser = this.state.validateUser
    return (
            <BrowserRouter>
                 <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/table" component={Client}/>
    <Route path="/charts" component={Linechart}/>
    {validateUser === 'ValidUser' ? <Route path="/Dashboard" component={App}/> : <Route exact path="/" component={Login}/>}
    <Route path="/Register" component={Register}/>
    <Route path="/Forgot" component={Forgot}/>
    <Route path="/ForgotScreen1" component={ForgotScreen1}/>
    <Route path="/ForgotScreen2" component={ForgotScreen2}/>
    </Switch>
    </BrowserRouter>

    )
  }
}
export default Routing
