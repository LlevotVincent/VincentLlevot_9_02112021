import React from 'react';
import axios from 'axios';
import Activitygraph from '../../Component/Activitygraph/Activitygraph';
import Nutritiondata from '../../Component/Nutritiondata/Nutritiondata';
import '../Home/Home.css'
import calories from '../../Assets/calories-icon.svg'
import protein from '../../Assets/protein-icon.svg'
import carbs from '../../Assets/carbs-icon.svg'
import fat from '../../Assets/fat-icon.svg'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      calorieCount: '',
      proteinCount: '',
      carbohydrateCount: '',
      lipidCount: '',
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3001/user/18")

      .then((res) => {
        console.log(res.data.data.keyData.calorieCount)
        this.setState(() => ({
          firstName: res.data.data.userInfos.firstName,
          calorieCount: res.data.data.keyData.calorieCount,
          proteinCount: res.data.data.keyData.proteinCount,
          carbohydrateCount: res.data.data.keyData.carbohydrateCount,
          lipidCount: res.data.data.keyData.lipidCount,
        }))
      })
  }

  render() {


    return (
      <div className="Home">
        <div className='User-identifier'>
          <div className='User'>
            <h1>Bonjour<span className='User-name'>{this.state.firstName}</span></h1>
          </div>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
        <div className='grid'>
          <div className='Graph'>
            <Activitygraph icon='' value='' text='' />
          </div>
          <div className='nutriscore'>
            <Nutritiondata logo={calories} value={this.state.calorieCount} unit='kCal' type='calorie' />
            <Nutritiondata logo={protein} value={this.state.proteinCount} unit='g' type='protéïne' />
            <Nutritiondata logo={carbs} value={this.state.carbohydrateCount} unit='g' type='glucide' />
            <Nutritiondata logo={fat} value={this.state.lipidCount} unit='g' type='lipide' />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;