import React from 'react';
import axios from 'axios';
import './AverageSessions.css'
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


class AverageSessions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSessions: [],
    }
    // const day = {
    //   1 : "L" ,
    //   2 : "M" ,
    //   3 : "M" ,
    //   4 : "J" ,
    //   5 : "V" ,
    //   6 : "S" ,
    //   7 : "D" ,
    // }

  }

  componentDidMount() {
    axios.get("http://localhost:3001/user/18/average-sessions")

      .then((res) => {
        // console.log(res.data.data.sessions)
        let UserInfos = res.data.data
        this.setState(() => ({
          dataSessions: UserInfos.sessions,
        }))
      })
  }



  render() {

    return (
      <div className="lineChart-container">
        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={258}
            height={263}
            data={this.state.dataSessions}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke="#fff"
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#fff"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
export default AverageSessions