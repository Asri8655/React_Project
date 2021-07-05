import React from 'react'
import 'font-awesome/css/font-awesome.min.css?raw'
function Topnav () {
  return (
      <div className="App">
 <nav className="navbar navbar-expand-lg navbar-light bg-white topbar mb-4 static-top shadow navv">
    <div className="container-fluid">
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="input-group size">
        <input type="search" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search"aria-describedby="search-addon" />
        <button className="btn btn-primary searchbtn"> <i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
       <div className="nav-link pr-74"><i className="fa fa-bell " aria-hidden="true"><span className="badge badge-danger badge-counter">3+</span></i></div>&nbsp;&nbsp;&nbsp;
        <i className="fa fa-envelope-o " aria-hidden="true"></i>
        <div className="topbar-divider d-none d-sm-block"></div>
         <a className="nav-link dropdown-toggle" href="/" id="userDropdown"
                                aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img className="img-profile rounded-circle ava" src="Images\undraw_profile.svg"alt=""/>
                            </a>
                        </div>
  </div>
</nav>
</div>
  )
}
export default Topnav
