import React from 'react';
import '../Nutritiondata/Nutritiondata.css'
import PropTypes from 'prop-types'

/**
 * Component for user nutritional value
 * @component 
 * 
 * @return {component}
 */


class Nutritiondata extends React.Component {

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
     * unit for nutrition data
     */ 
    unit: PropTypes.string,
       /**
     * type for nutrition data
     */ 
    type: PropTypes.string,  
    /**
    * logo for nutrition data
    */ 
    logo: PropTypes.string,
}
export default Nutritiondata

