import React from 'react';
import axios from 'axios';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class GraphPerformance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data : [],
        }

    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/18/performance")

            .then((res) => {
                console.log(res.data.data.data)
                this.setState(() => ({
                  data : res.data.data.data
                }))
            })
    }




render() {
    return (
      <div>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.state.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={this.state.kind} />
          <PolarRadiusAxis />
          <Radar name={this.state.userId} dataKey={this.state.value} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

export default GraphPerformance