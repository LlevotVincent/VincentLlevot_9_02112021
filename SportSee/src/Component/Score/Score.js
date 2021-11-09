import React from 'react';
import axios from 'axios';
import './Score.css'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


class ScorePerf extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            score: '',
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/18")

            .then((res) => {
                console.log(res.data.data.score)
                this.setState(() => ({
                    data: res.data.data,
                }))
            })
    }



    render() {
        return (
            <div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={258} height={263}>
              <Pie
                data={this.state.data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="score"
              />
            </PieChart>
          </ResponsiveContainer>
          </div>
        );
      }
    }
export default ScorePerf