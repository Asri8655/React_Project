/* eslint-disable no-console */
/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { toast } from 'react-toastify'

export default class ForgotScreen1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: [],
      SecurityQuestions: [],
      questionForOutputBox: '',
      questionForOutputBox2: '',
      questionId: 0,
      questionId2: 0,
      answer: '',
      answer2: ''

    }
  }

    handleUsername = (event) => {
      const key = event.target.name
      this.setState({ [key]: event.target.value })
    }

    componentDidMount () {
      const rememberMe = localStorage.getItem('result')
      this.setState({ response: rememberMe })
      const res = JSON.parse(rememberMe)
      this.setState({ questionForOutputBox: res[0].question })
      this.setState({ questionForOutputBox2: res[1].question })
      this.setState({ questionId: res[0].questionNo })
      this.setState({ questionId2: res[1].questionNo })
      // this.getAllPosts()
      // this.setQuestionForOutput()
    }

    getAllPosts = () => {
      // eslint-disable-next-line no-console
      fetch('http://localhost:8080/users/getAllQuestions')
        .then((response) => response.json())
        .then((postResponse) => {
          this.setState({ SecurityQuestions: postResponse })
        }).catch((error) => {
          alert(error)
        })
    }

    validateAnswer = (answer, answer2) => {
      if (answer.length > 0 && answer2.length > 0) {
        return true
      } else {
        toast.warn('Answer is not Empty')
      }
    }

    handleUser = (e) => {
      e.preventDefault()
      console.log(this.state.answer)
      console.log(this.state.answer2)
      const request = {

        answer: this.state.answer,
        question_Id: Number(this.state.questionId),
        answer2: this.state.answer2,
        question_Id2: Number(this.state.questionId2)
      }
      if (this.validateAnswer(this.state.answer, this.state.answer2)) {
        fetch('http://localhost:8080/users/ValidateAnswer', {
          method: 'POST',
          body: JSON.stringify(request),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((response) => response.text())
          .then((json) => {
            /*eslint-disable */
        console.log(json)
        if(json=='true'){
          this.props.history.push("/ForgotScreen2")
        } else {
          toast.error('Answer is Not Matching')
        }
            /* eslint-enable */
          }).catch((error) => {
            /*eslint-disable */
          console.log(error)
           /* eslint-enable */
          })
      }
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
<div className="col-lg-6 d-none d-lg-block bg-password-image"><img className="imageSize4" src="Images\0a16a19c1f13eb9282ec74524189ea3c.jpg" alt=""></img></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                        <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                            and well send you a link to reset your password!</p>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <output className="form-control form-control-user rounded-pill">
                                            {/* {this.state.SecurityQuestions.map(SecurityQuestions => {
                                              // eslint-disable-next-line eqeqeq
                                              if (this.state.response == SecurityQuestions.questionNo) {
                                                return (<option key={SecurityQuestions.questionNo} value={SecurityQuestions.questionNo}>
                                            {SecurityQuestions.question}
                                             </option>)
                                              }
                                            })} */} {this.state.questionForOutputBox}
                                           </output>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user rounded-pill"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter the Answer" onInput={(e) => this.handleUsername(e) } name="answer"/>
                                        </div>
                                        <div className="form-group">
                                            <output className="form-control form-control-user rounded-pill">{this.state.questionForOutputBox2}</output>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user rounded-pill"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter the Answer" name="answer2" onInput={(e) => this.handleUsername(e) }/>
                                        </div>
                                        <button onClick={(e) => this.handleUser(e) }className="btn btn-primary btn-user btn-block Login rounded-pill">
                                           Get Password
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
