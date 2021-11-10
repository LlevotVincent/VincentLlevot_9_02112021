import React from 'react';
import axios from 'axios';
import './Score.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

class ScorePerf extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataPerf: [],

    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/user/18")

      .then((response) => {
        console.log(response.data.data)
        let UserInfos = response.data.data
        this.setState(() => ({
          dataPerf: UserInfos,
        }))
      })
  }

  render() {

    return (
      <div className='PieChart-container'>
        <div className="PieChart-title">Score</div>
        <PieChart width={400} height={400}>
          <Pie
            data={this.state.dataPerf}
            dataKey="score"
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
            />
        </PieChart>

      </div>
    );
  }
}
export default ScorePerf