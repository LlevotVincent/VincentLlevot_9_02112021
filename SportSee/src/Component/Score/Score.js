import React from 'react';
import axios from 'axios';
import './Score.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


class ScorePerf extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/user/18")

      .then((res) => {
        console.log(res.data.data)
        this.setState(() => ({
          data: res.data.data,
        }))
      })
  }



  render() {


    return (
      <div className='PieChart-container'>
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={this.state.data}>
          <RadialBar
            minAngle={15}
            // label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="score"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
export default ScorePerf