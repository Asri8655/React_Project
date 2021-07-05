/* eslint-disable no-console */
/* eslint-disable no-console */
import 'font-awesome/css/font-awesome.min.css?raw'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      passWord: '',
      alert1: '',
      alert2: '',
      loginDetails: [],
      userDetails: [],
      res: 1,
      res1: 1,
      cnfmpassWord: '',
      showPassword: false,
      SecurityQuestions: [],
      answer: '',
      answer2: '',
      questionNo: 0,
      questionNo2: 0,
      qresult: '',
      passwordStatus: ''
    }
  }

  componentDidMount () {
    this.getAllPosts()
  }

  getAllPosts = () => {
    fetch('http://localhost:8080/users/getAllQuestions')
      .then((response) => response.json())
      .then((postResponse) => {
        this.setState({ SecurityQuestions: postResponse })
      }).catch((error) => {
        alert(error)
      })
  }

  handleChange = (event) => {
    const key = event.target.name
    this.setState({ [key]: event.target.value })
  }

  validateEmail = (inputText) => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (inputText.match(mailformat)) {
      return true
    } else {
      toast.warn('You have entered an invalid email address!')
      return false
    }
  }

  validateName = (firstName, lastName) => {
    const nameformat = /^[a-zA-Z\s]+$/
    console.log(typeof this.state.questionNo)
    console.log(typeof this.state.questionNo2)
    if (firstName.match(nameformat) && lastName.match(nameformat)) {
      return true
    } else {
      toast.error('Name is Invalid!')
      return false
    }
  }

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
  } else {
    this.setState({ passwordStatus: 'Password is Not a Required Type See Above' })
    return false
  }
}

  validateQues = (questionNo, questionNo2) => {
    if (questionNo === questionNo2) {
      this.setState({ qresult: 'Select Different Questions' })
    } else {
      this.setState({ qresult: '' })
      return true
    }
  }

ValidateAns = (Ans, Ans2) => {
  console.log('Number' + Number(this.state.questionNo))
  console.log('2Number' + Number(this.state.questionNo2))
  if (Ans.length > 0 && Ans2.length > 0) {
    return true
  } else {
    toast.warn('Answer is Not Empty')
  }
}

// setProductTypeId = (event) => {
//   this.setState({ questionNo: event.target.value })
// }

  handleSubmit = (event) => {
    event.preventDefault()
    // eslint-disable-next-line no-debugger
    if (this.ValidateAns(this.state.answer, this.state.answer2) && this.validateName(this.state.firstName, this.state.lastName) && this.validateQues(this.state.questionNo, this.state.questionNo2) && this.validateEmail(this.state.email) && this.validatePassword(this.state.passWord, this.state.cnfmpassWord) && this.matchPassword(this.state.passWord, this.state.cnfmpassWord)) {
      const request = {
        userData: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          loginData: {
            mail: this.state.email,
            password: this.state.passWord
          }
        },
        AnswerData:
             [
               { answer: this.state.answer, question_Id: Number(this.state.questionNo) },
               { answer: this.state.answer2, question_Id: Number(this.state.questionNo2) }
             ]
      }
      // console.log(this.state.questionNo2 + 1)
      fetch('http://localhost:8080/users/createUser&Login', {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((response) => response.json())
        .then((json) => {
        /*eslint-disable */
        console.log(json)
      toast.success("Registered Successfully");
      // window.location.reload()
            /* eslint-enable */
        }).catch((error) => {
        /*eslint-disable */
          toast.warn("Already Registered ");
          this.props.history.push('/')
          console.log(error)
           /* eslint-enable */
        })
      // eslint-disable-next-line no-console
    }
  }

  render () {
    return (
      <div className="forgot" >
      <div className="container">
<div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
             <div className="row">
                  <div className="col-lg-5 d-none d-lg-block bg-register-image"> <img className="imageSize1" src="Images\0a16a19c1f13eb9282ec74524189ea3c.jpg" alt=""></img></div>
                  <div className="col-lg-7">
                      <div className="p-5">
                          <div className="text-center">
                              <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                          </div>
                          <form className="user" onSubmit={(e) => this.handleSubmit(e) } >
                              <div className="form-group row">
                                  <div className="col-sm-6 mb-3 mb-sm-0">
                                      <input type="text" className="form-control form-control-user rounded-pill  " id="exampleFirstName lg" placeholder="First Name" onChange={(event) => { this.handleChange(event) }} name="firstName"/>
                                  </div>
                                  <div className="col-sm-6">
                                      <input type="text" className="form-control form-control-user rounded-pill" id="exampleLastName" placeholder="Last Name" onChange={(event) => { this.handleChange(event) }} name="lastName"/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <input type="email" className="form-control form-control-user rounded-pill" id="exampleInputEmail" placeholder="Email Address" onChange={(event) => { this.handleChange(event) }} name="email"/>
                                 </div>
                              <div className="form-group row">
                                  <div className="col-sm-6 mb-3 mb-sm-0">
                                      <input type="password" className="form-control form-control-user rounded-pill" id="exampleInputPassword" placeholder="Password" onChange={(event) => { this.handleChange(event) }} name="passWord"/>
                                   </div>
                                  <div className="col-sm-6">
                                    <input type="password" className="form-control form-control-user rounded-pill" id="exampleRepeatPassword" placeholder="Confirm Password" onChange={(event) => { this.handleChange(event) }} name="cnfmpassWord" />
                                  </div>
                                  <small className="note">Note: Password Contains Min 8 characters, at least one letter, one number and one special character</small>
                                  <small className="passwordresult">{this.state.passwordStatus}</small>
                              </div>
                              <select id="inputState" required className="form-control " name="questionNo" onChange={(event) => { this.handleChange(event) }} >
                    {this.state.SecurityQuestions.map(SecurityQuestions => { return (<option key={SecurityQuestions.questionNo} value={SecurityQuestions.questionNo}> {SecurityQuestions.question} </option>) })}

        </select>
                              <br></br>
                              <div className="col-sm-13">
                                    <input type="text" className="form-control form-control-user rounded-pill" id="exampleAnswer" placeholder="Answer" onChange={(event) => { this.handleChange(event) }} name="answer" />
                                  </div><br></br>
    <select id="inputState" required className="form-control" name="questionNo2" onChange={(event) => { this.handleChange(event) }} >
                    {this.state.SecurityQuestions.map(SecurityQuestions => { return (<option key={SecurityQuestions.questionNo} value={SecurityQuestions.questionNo}> {SecurityQuestions.question} </option>) })}

        </select>
                              <br></br>
                              <div className="col-sm-13">
                                    <input type="text" className="form-control form-control-user rounded-pill" id="exampleAnswer2" placeholder="Answer" onChange={(event) => { this.handleChange(event) }} name="answer2" />
                                  </div>
                                  <small className="questionresult">{this.state.qresult}</small>
<br></br>
            <button type="submit" className="btn btn-user btn-block rounded-pill" >
                                  Register Account
                              </button>
                              <hr/>
                              {/* <a href="index.html" className="btn btn-google btn-user btn-block rounded-pill btn btn-danger ">
                                  <i className="fa fa-google fa-fw"></i> Register with Google
                              </a> */}
                              {/* <a href="index.html" className="btn btn-facebook btn-user btn-block rounded-pill" id="fb-button">
                                  <i className="fa fa-facebook-f fa-fw"></i> Register with Facebook
                              </a> */}
                          </form>
                          <hr/>
                          <div className="text-center">
                            <Link to="/Forgot">  <a className="small" href="forgot-password.html">Forgot Password?</a></Link>
                          </div>
                          <div className="text-center">
                             <Link to="/"> <a className="small" href="login.html">Already have an account? Login!</a></Link>
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
export default Register
