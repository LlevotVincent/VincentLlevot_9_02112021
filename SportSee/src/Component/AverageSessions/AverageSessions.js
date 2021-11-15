import React from 'react';
import './AverageSessions.css'
import Api from '../API';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';



class AverageSessions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSessions: [],
    }


  }

  componentDidMount() {

    Api.findAverageSessions()

      .then((res) => {
        // console.log(res.data.data.sessions)
        let UserInfos = res.data.data
        this.setState(() => ({
          dataSessions: UserInfos.sessions,
        }))
      })
  }



  render() {


    // ***custom Tick***
    const day = ["L", "M", "M", "J", "V", "S", "D"]
    const Changetick = (item) => {
      return day[item - 1]
    }
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="lineChart-custom-tooltip">
            <p className="label">{`${payload[0].value} min`}</p>
          </div>
        );
      }
      return null;
    };

    return (
      <div className="lineChart-container">
        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer width="100%" height="100%" aspect={1.2}>
          <LineChart
            width='100%'
            data={this.state.dataSessions}
          >
            <XAxis
              domain={['dataMin - 50', 'dataMax + 50']}
              dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke="#fff"
              tickFormatter={Changetick}
              tickMargin={-10}
            />
            <Tooltip cursor={false} content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
export default AverageSessions