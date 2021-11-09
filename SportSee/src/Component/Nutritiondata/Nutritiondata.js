import React from 'react';
import axios from 'axios';
import '../Nutritiondata/Nutritiondata.css'


class Nutritiondata extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/user/18")

            .then((res) => {
                // console.log(res.data.data.keyData.firstName)
                this.setState(() => ({
                    firstName: res.data.data.keyData.firstName,
                }))
            })
    }

    render() {
        return (
            <div className='Nutritiondata'>
                <img className='Nutrilogo' src={this.props.logo} alt="logo" />
                <div className='Nutrisscore'>
                    <div className='Nutri-value'>{this.props.value}{this.props.unit}</div>
                    <div className='Nutri-unit'>{this.props.type}</div>
                </div>
            </div>
        )
    }
}
export default Nutritiondata