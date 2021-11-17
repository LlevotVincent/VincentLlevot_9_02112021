import React from 'react';
import '../Nutritiondata/Nutritiondata.css'


class Nutritiondata extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
        }
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