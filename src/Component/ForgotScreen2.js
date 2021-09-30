/*eslint-disable */
import React, { Component } from 'react'
import { toast } from 'react-toastify'
export default class ForgotScreen2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mail: '',
      passWord: '',
      cnfmpassWord: '',
      passwordStatus: ''
    }
  }

  // componentDidMount () {
  //   this.getAllPosts()
  // }

  matchPassword = (p1, p2) => {
    const pw1 = p1
    const pw2 = p2
    if (pw1 !== pw2) {
      toast.warn('Password is not matching')
      return false
    } else {
      return true
    }
  }

validatePassword = (pw1, pw2) => {
  // eslint-disable-next-line no-useless-escape
  const passwordformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  if (pw1.match(passwordformat) && pw2.match(passwordformat)) {
    this.setState({ passwordStatus: '' })
    return true
  } else if (pw1.length<=0 ||pw2.length<=0 ){
    toast.warn('Password Required')
  }else {
    this.setState({ passwordStatus: 'Password is Not a Required Type See Above' })
    return false
  }
}

validateEmail = (inputText) => {
  const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (inputText.match(mailformat)) {
    return true
  } else if (inputText.length<=0){
    toast.warn('Please Use hireAngunathan@gmail.com!')
  }else {
    toast.warn('You have entered an invalid email address!')
    return false
  }
}

      handleLogin =(event) => {
        event.preventDefault()
        const request = {
          mail: this.state.mail,
          passWord: this.state.cnfmpassWord
        }
        if (this.validateEmail(this.state.mail) && this.validatePassword(this.state.passWord, this.state.cnfmpassWord) && this.matchPassword(this.state.passWord, this.state.cnfmpassWord)) {
          // fetch('http://localhost:8080/users/UpdatePassword', {
          //   method: 'PUT',
          //   body: JSON.stringify(request),
          //   headers: {
          //     'Content-type': 'application/json; charset=UTF-8'
          //   }
          // })
          //   .then((response) => response.text())
          //   .then((json) => {
          //   /*eslint-disable */
          // console.log(json)
          // if(json=='true'){
          //     toast.success("Password Updated Successfully")
          // }
              /* eslint-enable */
        //     }).catch((error) => {
        //     /*eslint-disable */
        //     console.log(error)
        //      /* eslint-enable */
        //     })
        /*eslint-disable */
        localStorage.setItem("Password",this.state.cnfmpassWord)
        toast.success("Password Updated Successfully")
         /*eslint-disable */
        setTimeout(()=> {this.callLogin() }, 5000);
         }else{
           toast.error("Something Went Wrong !")
         }
      }

      callLogin=()=>{
        this.props.history.push("/")
      }

      handleUsername = (event) => {
        const key = event.target.name
        this.setState({ [key]: event.target.value })
      }

      render () {
        return (
          <div className="forgot">
            <div className="container">
     <div className="row justify-content-center forgottop">
     <div className="col-xl-10 col-lg-12 col-md-9">
    <div className="card o-hidden border-0 shadow-lg my-5">
    <div className="card-body p-0">
    <div className="row">
    <div className="col-lg-6 d-none d-lg-block bg-password-image"><img className="imageSize5" src="Images\0a16a19c1f13eb9282ec74524189ea3c.jpg" alt=""></img></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-2">Change Your Password</h1>
                                        </div>
                                        <form className="user">
                                        <div className="form-group">
                                                <input type="mail" className="form-control form-control-user rounded-pill"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter the Existing E-Mail" name="mail" onInput={(e) => this.handleUsername(e) }/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user rounded-pill"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter New Password" name="passWord" onInput={(e) => this.handleUsername(e) }/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user rounded-pill"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Confirm New Password" name="cnfmpassWord" onInput={(e) => this.handleUsername(e) }/>
                                            </div>
                                            {/* <small className="note">Note: Password Contains Min 8 characters, at least one letter, one number and one special character</small> */}
                                  <small className="passwordresult">{this.state.passwordStatus}</small>
                                            <button onClick={(e) => this.handleLogin(e) } className="btn btn-primary btn-user btn-block Login rounded-pill">
                                              Change Password
                                            </button>
                                        </form>
                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="/Register">Create an Account!</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="/">Already have an account? Login!</a>
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
