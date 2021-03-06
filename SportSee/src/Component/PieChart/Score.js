import React from 'react';
import './Score.css'
import callApi from '../API';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


/**
 * Component for user's progress activity
 * @component 
 * @return {component}
 */
class ScorePerf extends React.Component {

  constructor() {
    super();
    this.state = {
      dataPerf: [],
    }
  }

  componentDidMount() {
    callApi.findUser()
      .then((response) => {
        // console.log(response.data.data)
        let UserInfos = response.data.data
        this.setState(() => ({
          dataPerf: UserInfos,
        }))
      })
  }


  render() {
  /**
    *Use to get infromation from API
    *To solve difference from data between user
  */

    let dataScore = this.state.dataPerf.todayScore
    let ErrorData = this.state.dataPerf.score

    if (dataScore === undefined) {
      dataScore = ErrorData
      if(ErrorData === undefined){
        return <div>Désolé, je ne peux récupérer les données</div>
      }
    }
    

  /**
    *Use to define value and fill for data  .
  */
    const data = [
      { name: 'Group A', value: dataScore, fill: 'red' },
      { name: 'Group A', value: 1 - dataScore, fill: 'transparent', strokeWidth: 0 }
    ];

    const data02 = [
      { name: 'Group B', value: 1, fill: '#ffffff' },
    ];

    return (
      <div className='PieChart-container'>
        <ResponsiveContainer width='100%' height='100%' className="PieChart-container">
          <PieChart >
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={90}
              outerRadius={100}
              startAngle={90}
              endAngle={450}
              cornerRadius={50}
              dataKey="value"
            />

            <Pie
              data={data02}
              cx='50%'
              cy='50%'
              innerRadius={0}
              outerRadius={90}
              dataKey="value"
            />

          </PieChart>
        </ResponsiveContainer>
        <div className="PieChart-title">Score</div>
        <div className="UserPerf">{dataScore * 100}%
          <p>de votre activité</p>
        </div>
      </div>
    );
  }
}
export default ScorePerf