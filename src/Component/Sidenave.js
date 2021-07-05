import React from 'react'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css?raw'
function Sidenav () {
  return (
        <div>
        <div className="sidenav">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"/>
                      <div className="sidebar-brand-icon rotate-n-15 admin">
                      <i className="fa fa-smile-o" aria-hidden="true"></i>
                    <span className="sidebar-brand-text mx-1     font-family: revert;"> SB ADMIN<sup>2</sup></span>
                      </div>
                        <hr className="sidebar-divider  hrcolor my-0 hrr"/>
                                               <div className="dashcolor"> <Link to="/" class="Linkallign2"><i className="fa fa-tachometer" aria-hidden="true">&nbsp;<span>Dashboard</span></i><br></br></Link>  </div>
                                               <hr className="sidebar-divider my-0 hrcolor hrr"/>
      {/* <div className="sidebar-heading interface  hrr1">INTERFACE</div><br></br> */}
                  <div className="Lable"><i className="fa fa-cog icon" aria-hidden="true">&nbsp; <span>Components<i className="fa fa-angle-right rightarrow" aria-hidden="true"></i></span></i> </div>
                {/* &nbsp;&nbsp;&nbsp;  <div className="Lable"> <i className="fa fa-wrench icon" aria-hidden="true">
                <span>&nbsp;&nbsp;Utilities <i className="fa fa-angle-right rightarrow2" aria-hidden="true"></i></span> </i></div> */}
                <hr className="sidebar-divider hrcolor hrr"/>
                {/* <div className="sidebar-heading interface hrr1 "> Addons  </div><br></br> */}
                <div className="Lable"><i className="fa fa-folder icon" aria-hidden="true"><span >&nbsp;&nbsp;Pages<i className="fa fa-angle-right rightarrow3" aria-hidden="true"></i></span></i></div>
                          <br></br> <div className="Lable"> <Link to="/charts" className="Linkallign"><i className="fa fa-area-chart icon" aria-hidden="true">&nbsp;<span >Charts</span></i></Link> </div>
                                                    {/* <br></br> <div className="Lable"> <Link to="/table" className="Linkallign"> <i className="fa fa-fw fa-table icon">&nbsp;<span>Tables</span></i></Link> </div> */}
                          </div>
                                                    </div>
  )
}
export default Sidenav
