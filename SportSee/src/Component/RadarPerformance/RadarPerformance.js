import React from 'react';
import './RadarPerformance.css'
import Api from '../API';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class RadarPerformance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataRadar: [],
      tickinfo: {}
    }
  }

  componentDidMount() {
    Api.findPerformance()

      .then((res) => {
        // console.log(res.data.data.data)
        let UserInfos = res.data.data
        this.setState(() => ({
          tickinfo: UserInfos.kind,
          dataRadar: UserInfos.data,
        }))
      })
  }


  render() {

    // ***custom Tick with kind***
    let tickinfo = this.state.tickinfo
    console.log(tickinfo)
    const Changetick = (item) => {
      return tickinfo[item]
    }

    return (
      <div className='RadarChart-container'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={this.state.dataRadar}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              tickFormatter={Changetick}
              stroke="white"
              fontSize={12}
              tickLine={false} 
            />
            <PolarRadiusAxis 
            axisLine={false} 
            tick={false} 
            tickCount={6}
            />
            <Radar name="18" dataKey="value" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default RadarPerformance