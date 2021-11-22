import React from 'react';
import './AverageSessions.css'
import callApi from '../API';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Component for user's time sessions
 * @component 
 * @return {component}
 */
class AverageSessions extends React.Component {

  constructor() {
    super();
    this.state = {
      dataSessions: [],
    }
  }

  componentDidMount() {
    callApi.findAverageSessions()
      .then((res) => {
        // console.log(res.data.data.sessions)
        let UserInfos = res.data.data
        this.setState(() => ({
          dataSessions: UserInfos.sessions,
        }))
      })
  }

  render() {
  /**
    *Change Abscissa name
    * @param {objet} Abscissa tick from data
    * @return {string} const day on abscissa
  */
      const day = ["L", "M", "M", "J", "V", "S", "D"]
      const Changetick = (item) => {
       return day[item - 1]
    }
  /**
    *change tooltip design *
    * @param {object} value from payload
    * @return {string} new style for tooltip
  */
    const CustomTooltip = ({ active, payload }) => {
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
        <ResponsiveContainer width="100%" height="100%" >
          <LineChart
            width='100%'
            data={this.state.dataSessions}
            margin={{ top: 20, right: 10, left: -50, bottom: 20 }}
          >
            <YAxis
              domain={['dataMin - 20', 'dataMax +30']}
              axisLine={false}
              tick={false}
              dataKey="sessionLength"
              type={'number'}
            />
            <XAxis
              domain={['dataMin - 10', 'dataMax + 10']}
              dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke="#fff"
              tickFormatter={Changetick}
            />
            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
            />
            <Line
              dataKey="sessionLength"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
              type="natural"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
export default AverageSessions