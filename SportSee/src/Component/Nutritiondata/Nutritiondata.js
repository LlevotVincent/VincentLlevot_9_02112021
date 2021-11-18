import React from 'react';
import '../Nutritiondata/Nutritiondata.css'
import PropTypes from 'prop-types'

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

Nutritiondata.propTypes = {
    /**
     * value from Api
     */
    value: PropTypes.number,
    /**
     * unit, type, logo from home page
     */ 
    unit: PropTypes.string,
    type: PropTypes.string,
    logo: PropTypes.string,
}

export default Nutritiondata