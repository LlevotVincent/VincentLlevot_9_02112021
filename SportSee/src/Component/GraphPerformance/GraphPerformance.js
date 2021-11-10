import React from 'react';
import axios from 'axios';
import './GraphPerformance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class GraphPerformance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataRadar: [],
    }

  }

  componentDidMount() {
    axios.get("http://localhost:3001/user/18/performance")

      .then((res) => {
        // console.log(res.data.data.data)
        let UserInfos = res.data.data
        this.setState(() => ({
          dataRadar: UserInfos.data,
        }))
      })
  }




  render() {

    return (
      <div className='RadarChart-container'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.state.dataRadar}>
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