import React from 'react';
import '../Home/Home.css'

class Home extends React.Component {

    render() {
   
      return (
        <div className="Home">
            <div className='User-identifier'>          
                <div className='User'>
                    <h1>Bonjour  <span className='User-name'>prénom de l'utilisateur</span></h1>
                </div>
                <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
            </div>
           
        </div>
      )
    }
  }
  
  export default Home;