import React from 'react';
import './RadarPerformance.css'
import callApi from '../API';
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
    callApi.findPerformance()
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

    /***********************
    Change tick for french trad
    * @param {objet}  new const created
    * @return {string} const stat on tick
    ***********************/
    const stat = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]
    const Changetick = (item) => {
      return stat[item - 1]
    }

    return (
      <div className='RadarChart-container'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={this.state.dataRadar}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              tickFormatter={Changetick}
              stroke="#FFFFFF"
              fontSize={12}
              tickLine={false} 

            />
            <PolarRadiusAxis 
              domain= {[0, 250]}
              axisLine={false} 
              tick={false} 
              tickCount={6}
            />
            <Radar 
              dataKey="value" 
              fill="rgba(255, 1, 1, 0.7)" 
              fillOpacity={0.6} 
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default RadarPerformance