import React from 'react';
import axios from 'axios';
import '../Activitygraph/Activitygraph.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



class Activitygraph extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         firstName: "",
    //         lastname: "",
    //         age: "",
    //     }
    // }

    componentDidMount() {
        axios.get("http://localhost:3001/user/18/activity")

            .then((res) => {
                console.log(res);
            })
    }




    render() {
        return (
            <div className='activitygraph'>
                <h3>Activité quotidienne</h3>
                {/* <BarChart /> */}

            </div>
        )
    }
}
export default Activitygraph