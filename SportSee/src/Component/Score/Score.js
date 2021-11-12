import React from 'react';
import axios from 'axios';
import './Score.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


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
    const dataPerf = this.state.dataPerf.score

    const data = [
      { name: 'Group A', value: dataPerf },
      { name: 'Group A', value: 1-dataPerf }
    ];
    const COLORS = ['#FF0000', '#FBFBFB'];

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
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0}/>
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="PieChart-title">Score</div>
        <div className="UserPerf">{dataPerf * 100}%
          <p>de votre activité</p>
        </div>
      </div>
    );
  }
}
export default ScorePerf