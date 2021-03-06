import React from 'react';
import './Activity.css';
import callApi from '../API';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * Component for user activity
 * @component 
 * @return {component}
 */

class Activity extends React.Component {

    constructor() {
        super();
        this.state = {
            dataActivity: [],
            error: false
        }

    }

    componentDidMount() {
        callApi.findActivity()
            .then((res) => {
                // console.log(res.data.data.sessions)
                let UserInfos = res.data.data
                this.setState(() => ({
                    dataActivity: UserInfos.sessions,
                }))
            })
            // .catch(function () {
            //     this.setState({ error: true })
            // })
    }
    /**
        *Change Abscissa name
        * @method
        * @param {string} Abscissa tick from data
        * @return {string} two last character
    */
    formatXAxis = (tickItem) => {
        if (typeof tickItem === 'string') {
            return tickItem.substring(tickItem.length - 2, tickItem.length)
        }
    }
    /**
        *change legend name
        * @method
        * @param {string} legend from data
        * @return {string} new legend with new style
    */
    FormatLegend = (value) => {
        const style = { color: "#74798C", fontSize: "14px" }
        if (value === "kilogram") { value = "Poids (kg)" } else { value = "Calories brûlées (KCal)" }
        return <span style={style}>{value}</span>
    }
    /**
        *change tooltip design *
        * @method
        * @param {object} value from payload
        * @return {string} new style for tooltip
    */
    CustomTooltip = ({ active, payload }) => {
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

    Test = () => {
        let kilogram = this.state.dataActivity
        for (let item of kilogram) {
            console.log(item)
        if( item.kilogram === undefined){
            item.kilogram = 0
        }
        return item.kilogram
    }

    }
    render() {
    
        for (let item of this.state.dataActivity) {
            if(item.kilogram === undefined){
                item.kilogram = 0;
            }
            if(item.calories === undefined){
                item.calories = 0;
            }
        }
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
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            barGap={8}
                        >
                            <CartesianGrid
                                vertical={false}
                                strokeDasharray="2 1"
                            />
                            <XAxis
                                stroke="#9B9EAC"
                                dataKey="day"
                                tickLine={false}
                                tickFormatter={this.formatXAxis}

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
                                content={this.CustomTooltip}
                            />
                            <Legend
                                align="right"
                                verticalAlign="top"
                                iconType="circle"
                                wrapperStyle={{ paddingTop: 20, paddingBottom: 40 }}
                                formatter={this.FormatLegend}
                            />
                            <Bar dataKey= "kilogram" fill="#000000" barSize={7} radius={[3, 3, 0, 0]} />
                            <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )
        }
    }

export default Activity