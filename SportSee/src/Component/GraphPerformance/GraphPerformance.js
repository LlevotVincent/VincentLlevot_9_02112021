import React from 'react';
import axios from 'axios';
import './GraphPerformance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

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
                console.log(res.data.data)
                this.setState(() => ({
                  data : res.data.data,
                }))
            })
    }




render() {
    return (
      <div className='RadarChart-container'>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.state.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar name="18" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </div>
    );
  }
}

export default GraphPerformance