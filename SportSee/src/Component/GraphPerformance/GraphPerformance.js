import React from 'react';
import axios from 'axios';
import './GraphPerformance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class GraphPerformance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }

  }

  componentDidMount() {
    axios.get("http://localhost:3001/user/18/performance")

      .then((res) => {
        // console.log(res.data.data.data)
        this.setState(() => ({
          data: res.data.data.data,
        }))
      })
  }




  render() {

    return (
      <div className='RadarChart-container'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.state.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis  axisLine={false} tick={false} />
            <Radar name="18" dataKey="value"  fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default GraphPerformance