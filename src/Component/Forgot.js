/*eslint-disable */
import 'font-awesome/css/font-awesome.min.css?raw'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { toast } from 'react-toastify'
class Forgot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mail: '',
      password: '',
      det: []
    }
  }

  // componentDidMount () {
  //   this.getAllPosts()
  // }

  getAllPosts =() => {
  }

  handleLogin =(event) => {


    if(this.state.mail==='hireAngunathan@gmail.com'){
       this.props.history.push("/ForgotScreen2");
       } else {
         toast.error("Use hireAngunathan@gmail.com")
       }
    // this.state.det.map(det => {
    //   if (det.mail === (this.state.mail)) {
    //     // this.sendEmail(this.state.mail)
    //     // eslint-disable-next-line react/prop-types
    //     this.props.history.push('/ForgotScreen1')
    //   } else {
    //     /*eslint-disable */
    //     this.props.history.push('/Register')
    //     /* eslint-enable */
    //   }
    //   return true
    // })
    // event.preventDefault()
    // const request = {
    //   mail: this.state.mail
    // }

    // fetch('http://localhost:8080/users/ForgotPassword', {
    //   method: 'POST',
    //   body: JSON.stringify(request),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8'
    //   }
    // })
    //   .then((response) => response.text())
    //   .then((json) => {
    //   /*eslint-disable */
    //   console.log(json)
    //  localStorage.setItem('result',json);
    //  let res=json
    //  if(json!='mail is not valid'){
    //  this.props.history.push("/ForgotScreen1");
    //  } else {
    //    toast.error("E-Mail is Not Valid")
    //  }
    //       /* eslint-enable */
    //   }).catch((error) => {
    //   /*eslint-disable */
    //     console.log(error)
    //      /* eslint-enable */
    //   })
  }

  // sendEmail =(e) => {
  //   e.preventDefault()
  //   emailjs.sendForm('service_s4ggagq', 'template_6h7o5pb', e.target, 'user_O4IXeNiQpmKqQfjwvikRt')
  //     .then((result) => {
  //       /*eslint-disable */
  //       console.log(result.text)
  //         /* eslint-enable */
  //     }, (error) => {
  //       /*eslint-disable */
  //       console.log(error.text)
  //         /* eslint-enable */
  //     })
  // }

  handleUsername = (event) => {
    this.setState({ mail: event.target.value })
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
<div className="col-lg-6 d-none d-lg-block bg-password-image"><img className="imageSize3" src="Images\0a16a19c1f13eb9282ec74524189ea3c.jpg" alt=""></img></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                        <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                            and well send you a link to reset your password!</p>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user rounded-pill"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." name="mail" onInput={(e) => this.handleUsername(e) }/>
                                        </div>
                                        <button onClick={(e) => this.handleLogin(e) } className="btn btn-primary btn-user btn-block Login rounded-pill">
                                           Forgot Password
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
export default Forgot
