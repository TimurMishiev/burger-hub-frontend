import React from 'react';

class Landing extends React.Component {
  render(){
    return (
    <div>
      <div className='restaurant_select'>
        <div className='restaurant_select_top'>

          <div className='restaurant_select_top-header'>CHOOSE A RESTAURANT</div>

        <div className='arrow_piker'>
          <div className='arrow_piker-up'></div>
          <div className='arrow_piker-down'></div>
          </div>
        </div>
    

        <div className='restaurant_select_bottom'>
          <ul>
            <li>Dumbo</li>
            <li>Ditmas Park</li>
            <li>Park Slope</li>
          </ul>

        </div>
      </div>

      <button> Go to the restaurant</button>
    </div>
    );
  }
}

export default Landing;