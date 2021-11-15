import React from 'react';
import './Activity.css'
import Api from '../API';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



class Activity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataActivity: [],
        }

    }

    componentDidMount() {
        Api.findActivity()

            .then((res) => {
                // console.log(res.data.data.sessions)
                let UserInfos = res.data.data
                this.setState(() => ({
                    dataActivity: UserInfos.sessions,
                }))
            })
    }



    render() {

        //*change Abscissa name */
        const FormatTick = (value) => {
            console.log(value)
            // return value.substring(value.length - 1 ,value.length)
        }
        //*change legend name */
        const FormatLegend = (item) => {
            console.log(item)
            return item === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)";
        }
        //*change tooltip design */
        const CustomTooltip = ({ active, payload}) => {
            if (active && payload && payload.length) {
                return (
                    <div className="barChart-custom-tooltip">
                        <p className="label">{`${payload[0].value} kg`}</p>
                        <p className="label">{`${payload[1].value} kCal`}</p>
                    </div>
                );
            }
            return null;
        };

        return (
            <div className='activity'>
                <div className='activity-title'>
                    <h3>Activité quotidienne</h3>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width='100%'
                        height='100%'
                        data={this.state.dataActivity}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <CartesianGrid
                            vertical={false}
                            strokeDasharray="2 1"
                        />
                        <XAxis
                            stroke="#9B9EAC"
                            dataKey="day"
                            tickLine={false}
                            tickFormatter={FormatTick}
  
                        />
                        <YAxis
                            orientation="right"
                            stroke="#9B9EAC"
                            axisLine={false}
                            tickCount={3}
                            tickLine={false}
                            tickMargin={10}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                        />
                        <Legend
                            align="right"
                            verticalAlign="top"
                            iconType="circle"
                            wrapperStyle={{ paddingTop: 20, paddingBottom: 40 }}
                            formatter={FormatLegend}
                        />
                        <Bar dataKey="kilogram" fill="#000000" barSize={7} radius={[3, 3, 0, 0]} />
                        <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}
export default Activity