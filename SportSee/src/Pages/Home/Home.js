import React from 'react';
import axios from 'axios';
import Activity from '../../Component/Activity/Activity';
import Nutritiondata from '../../Component/Nutritiondata/Nutritiondata';
import AverageSessions from '../../Component/AverageSessions/AverageSessions';
import GraphPerformance from '../../Component/GraphPerformance/GraphPerformance';
import '../Home/Home.css'
import calories from '../../Assets/calories-icon.svg'
import protein from '../../Assets/protein-icon.svg'
import carbs from '../../Assets/carbs-icon.svg'
import fat from '../../Assets/fat-icon.svg'
import ScorePerf from '../../Component/Score/Score';



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
        // console.log(res.data.data.keyData.calorieCount)
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
          <div className='weeklyactivity'>
            <Activity icon='' value='' text='' />
          </div>
          <div className='TimeSessions'>
            <AverageSessions />
          </div>
          <div className='Performance'>
            <GraphPerformance />
          </div>
          <div className='ScorePerf'>
            <ScorePerf />
          </div>
          <div className='Nutri-calorie'>
            <Nutritiondata logo={calories} value={this.state.calorieCount} unit='kCal' type='calorie' />
          </div>
          <div className='Nutri-protein'>
            <Nutritiondata logo={protein} value={this.state.proteinCount} unit='g' type='protéïne' />
          </div> 
          <div className='Nutri-carbs'> 
            <Nutritiondata logo={carbs} value={this.state.carbohydrateCount} unit='g' type='glucide' />
          </div> 
          <div className='Nutri-fat'>
            <Nutritiondata logo={fat} value={this.state.lipidCount} unit='g' type='lipide' />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;