import React from 'react';
import Api from '../../Component/API';
import Activity from '../../Component/BarChart/Activity';
import Nutritiondata from '../../Component/Nutritiondata/Nutritiondata';
import AverageSessions from '../../Component/LineChart/AverageSessions';
import RadarPerformance from '../../Component/RadarChart/RadarPerformance';
import ScorePerf from '../../Component/PieChart/Score';
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
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    }
  }
  componentDidMount() {

    Api.findUser()
      .then((res) => {
        // console.log(res.data.data.keyData)
        let UserInfos = res.data.data
        this.setState(() => ({
          firstName: UserInfos.userInfos.firstName,
          calorieCount: UserInfos.keyData.calorieCount,
          proteinCount: UserInfos.keyData.proteinCount,
          carbohydrateCount: UserInfos.keyData.carbohydrateCount,
          lipidCount: UserInfos.keyData.lipidCount,
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
        <div className='Grid-container'>
          <div className='Grid-performance'>
            <div className='weeklyactivity'>
              <Activity />
            </div>
            <div className='TimeSessions'>
              <AverageSessions />
            </div>
            <div className='Performance'>
              <RadarPerformance />
            </div>
            <div className='ScorePerf'>
              <ScorePerf />
            </div>
          </div>
          <div className='Grid-nutriscore'>
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
      </div>
    )
  }
}

export default Home;