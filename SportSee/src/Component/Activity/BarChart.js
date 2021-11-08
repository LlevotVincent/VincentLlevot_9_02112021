import React from 'react';
import axios from 'axios';
import './BarChart.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



class Activity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sessions: [],
            day: "",
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/18/activity")

            .then((res) => {
                console.log(res.data.data.sessions)
                this.setState(() => ({
                    sessions: res.data.data.sessions,
                    day : res.data.data.sessions.day,
                }))
            })
    }


    renderLegend = (datakey) => {

        if(datakey= "kilogram"){
            datakey= "Poids (kg)"
        }
        else {
            datakey= "Calories brûlées (kCal)"
        }
      
        return (
            <Legend content={datakey} />
        );
      }
    render() {
        console.log(this.state.sessions)
        return (
            <div className='activity'>
                <div className='activity-title'>
                    <h3>Activité quotidienne</h3>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={this.state.sessions}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={this.state.sessions.day} />
                        <YAxis />
                        <Tooltip />
                        <Legend  
                            align="right"
                            verticalAlign="top" 
                            iconType="circle" 
                            wrapperStyle={{paddingTop: 23 , paddingBottom:30}}
                            content={renderLegend}
                        />
                        <Bar dataKey="kilogram" fill="#000000" barSize={7} radius={3}/>
                        <Bar dataKey="calories" fill="#ff0000" barSize={7} radius={3}/>
                    </BarChart>
                </ResponsiveContainer>

            </div>
        )
    }
}
export default Activity