/* eslint-disable no-debugger */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css?raw'
import { toast } from 'react-toastify'
toast.configure()

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mail: '',
      password: ''
    }
  }

  // /

  // getAllPosts = () => {
  //   fetch('http://localhost:8080/users/getAllLogin')
  //     .then((response) => response.json())
  //     .then((postResponse) => {
  //       this.setState({ det: postResponse })
  //     }).catch((error) => {
  //       /* eslint-disable */
  //       console.log(error)
  //        /* eslint-enable */
  //     })
  // }

  // handleUsername = (event) => {
  //   this.setState({ mail: event.target.value })
  // }

  // handlePassword = (event) => {
  //   this.setState({ password: event.target.value })
  // }

  handleChange = (event) => {
    const key = event.target.name
    this.setState({ [key]: event.target.value })
  }

  handleLogin = (event) => {
    event.preventDefault()
    const request = {
      mail: this.state.mail,
      password: this.state.password
    }

    fetch('http://localhost:8080/users/UserLogin', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((response) => response.text())
      .then((json) => {
        /*eslint-disable */
       console.log(json)
       if(json=="Valid"){
         localStorage.setItem('validUser','ValidUser')
       this.props.history.push("/Dashboard")
       }else{
         toast.error("Invalid Username or Password")
         window.location.reload()
       }
          /* eslint-enable */
      }).catch((error) => {
      /*eslint-disable */
        console.log(error)
       
         /* eslint-enable */
      })
  }

  render () {
    return (
      <div className="forgot" >
     <div className="container">
<div className="row justify-content-center">
<div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                         <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"> <img className="imageSize" src="Images\0a16a19c1f13eb9282ec74524189ea3c.jpg" alt=""></img></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user rounded-pill"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." onChange={(event) => { this.handleChange(event) }} name="mail"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user rounded-pill"
                                                id="exampleInputPassword" placeholder="Password" onChange={(event) => { this.handleChange(event) }} name="password"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input rounded-pill " id="customCheck"/>
                                                <label className="custom-control-label" htmlFor="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                      <button onClick={(e) => this.handleLogin(e) } className="btn btn-primary btn-user btn-block Login rounded-pill">
                                            Login
                                        </button>
                                        <hr/>
                                        <a href="index.html" className="btn btn-google btn-user btn-block rounded-pill btn "id="fb-button">
                                            <i className="fa fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" className="btn btn-blue btn-user btn-block rounded-pill" id="fb-button">
                                            <i className="fa fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                    <Link to="/Forgot"> <a className="small" href="forgot-password.html">Forgot Password?</a></Link>
                                    </div>
                                    <div className="text-center">
                                    <Link to="/Register">    <a className="small" href="register.html">Create an Account!</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                  </div>
    </div>
    )
  }
}
export default Login
