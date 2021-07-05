import './App.css'
import 'font-awesome/css/font-awesome.min.css?raw'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Chart } from 'react-google-charts'
import Sidenav from './Component/Sidenave'
import Topnav from './Component/Topnav'
import React from 'react'
class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      validateUser: ''
    }
  }

  render () {
    return (
              <div className="App">
                <Sidenav/>
                      <Topnav/>
 <div className="Dashhead">
<div className="container-fluid ">
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800 dashcolor">Dashboard</h1>
    <a href="h" className="d-none d-sm-inline-block btn btn-sm btn-primary reports shadow-sm report"><i className="fa fa-download fa-sm text-white-50"></i> Generate Report</a>
</div>
</div>
</div>
<div className="roww"><div className="row roww">
<div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2 leftcolor1">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 textsize"> Earnings (Monthly)</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800 textsize1">$40,000</div>
                </div>
           <div className="col-auto"> <i className="fa fa-calendar fa-2x iconcolor"></i> </div>
            </div>
        </div>
    </div>
</div>
<div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2 leftcolor2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1 textsize">
                                                Earnings (Annual)</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800 textsize1">$215,000</div>
                                        </div>
                                        <div className="col-auto">
                                        <i className="fa fa-usd fa-2x text-gray-300 iconcolor" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-info shadow h-100 py-2 leftcolor3">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1 textsize">Tasks
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800 textsize1">50%</div>
                                                </div>
                                                <div className="col">
                                                    <div className="progress progress-sm mr-2">
                                                        <div className="progress-bar bg-info prog" role="progressbar"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                        <i classNames="fa fa-clipboard fa-2x text-gray-300 iconcolor" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-warning shadow h-100 py-2 leftcolor4">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 textsize">Pending Requests</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800 textsize1 ">18</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fa fa-comments fa-2x text-gray-300 iconcolor"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="graph">
                         <div classNames="row rowsize">
                       <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                           <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="d" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-ellipsis-v fa-sm fa-fw text-gray-400 "></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="g">Action</a>
                                            <a className="dropdown-item" href="y">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="t">Something else here</a>
                                        </div>
                                    </div>
                                       </div>
                                     <div className="card-body">
                                    <div className="chart-area">
                                       <Chart
                                         width={'500px'}
                            height={'300px'}
                        chartType="BubbleChart"
                    loader={<div>Loading Chart</div>}
                             data={[
                               ['ID', 'X', 'Y', 'Temperature'],
                               ['', 80, 167, 120],
                               ['', 79, 136, 130],
                               ['', 78, 184, 50],
                               ['', 72, 278, 230],
                               ['', 81, 200, 210],
                               ['', 72, 170, 100],
                               ['', 68, 477, 80]
                             ]}
  options={{
    colorAxis: { colors: ['yellow', 'red'] }
  }}
  rootProps={{ 'data-testid': '2' }}
/>
                                    </div>
                                </div>

                                </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="t" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="s">Action</a>
                                            <a className="dropdown-item" href="u">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="b">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                               <div className="card-body">
                                    <div className="chart-pie pt-4 pb-2">
                                    <Chart
  width={'300px'}
  height={'223px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]}
  options={{
    title: 'My Daily Activities',
    is3D: true
  }}
  rootProps={{ 'data-testid': '2' }}
/>
                                    </div>
                                    <div className="mt-4 text-center small">
                                        <span className="mr-2">
                                            <i className="fa fa-circle text-primary"></i> Direct
                                        </span>
                                        <span className="mr-2">
                                            <i className="fa fa-circle text-success"></i> Social
                                        </span>
                                        <span className="mr-2">
                                            <i className="fa fa-circle text-info"></i> Referral
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                 <div className="row roww">
<div className="col-lg-6 mb-4">
<div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary pro">Projects</h6>
        </div>
        <div className="card-body">
            <h4 className="small font-weight-bold  pro1">Server Migration <span
                    className="float-right">20%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar bg-danger Server" role="progressbar"
                    aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold  pro1">Sales Tracking <span
                    className="float-right">40%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar bg-warning Server2" role="progressbar"
                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold  pro1">Customer Database <span
                    className="float-right">60%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar Server3" role="progressbar"
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold  pro1">Payout Details <span
                    className="float-right">80%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar bg-info Server4" role="progressbar"
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold  pro1">Account Setup <span
                    className="float-right">Complete!</span></h4>
            <div className="progress">
                <div className="progress-bar bg-success Server5" role="progressbar"
                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
<div className="row">
        <div className="col-lg-6 mb-4">
            <div className="card bg-primary text-white shadow">
                <div className="card-body">
                    Primary
                    <div className="text-white-50 small">#4e73df</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-success text-white shadow">
                <div className="card-body">
                    Success
                    <div className="text-white-50 small">#1cc88a</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    Info
                    <div className="text-white-50 small">#36b9cc</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-warning text-white shadow">
                <div className="card-body">
                    Warning
                    <div className="text-white-50 small">#f6c23e</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-danger text-white shadow">
                <div className="card-body">
                    Danger
                    <div className="text-white-50 small">#e74a3b</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-secondary text-white shadow">
                <div className="card-body">
                    Secondary
                    <div className="text-white-50 small">#858796</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-light text-black shadow">
                <div className="card-body">
                    Light
                    <div className="text-black-50 small">#f8f9fc</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    Dark
                    <div className="text-white-50 small">#5a5c69</div>
                </div>
            </div>
        </div>
    </div>

</div>

<div className="col-lg-6 mb-4">
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary illu">Illustrations</h6>
        </div>
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    src="img/undraw_posting_photo.svg" alt=""/>
            </div>
            <p>Add some quality, svg illustrations to your project courtesy of <a
                     rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                constantly updated collection of beautiful svg images that you can use
                completely free and without attribution!</p>
            <a rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                unDraw &rarr;</a>
        </div>
    </div>

    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary illu">Development Approach</h6>
        </div>
        <div className="card-body">
            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                CSS bloat and poor page performance. Custom CSS classes are used to create
                custom components and custom utility classes.</p>
            <p className="mb-0">Before working with this theme, you should become familiar with the
                Bootstrap framework, especially the utility classes.</p>
        </div>
    </div>

</div>
</div>
</div>
<footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
                                </div>)
  }
}
export default App
