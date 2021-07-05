import React from 'react'
import { Chart } from 'react-google-charts'
import Sidenav from './Sidenave'
import Topnav from './Topnav'
class Linechart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
        <div>
                                   <Sidenav/>
          <Topnav/>
<div className="charts">
        <div style={{ display: 'flex', maxWidth: 900 }}>
        <Chart
  width={'700px'}
  height={'500px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ]}
  options={{
    // Material design options
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017'
    }
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
<Chart
  width={'700px'}
  height={'500px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 12],
    ['Eat', 1],
    ['Commute', 2],
    ['Watch TV', 1],
    ['Sleep', 8]
  ]}
  options={{
    title: 'My Daily Activities'
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </div>
        </div>
      </div>
    )
  }
}
export default Linechart
