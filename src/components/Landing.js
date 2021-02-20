import React from 'react';
import Restaurants from './Restaurants.js';
import RestaurantAction from '../actions/RestaurantAction.js'


class Landing extends React.Component {
  constructor(){
    super()

    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
  RestaurantAction.fetchRestaurants().then(restaurants => this.setState({ restaurants }))
  }

  render(){
    return (
    <React.Fragment>
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
           <Restaurants restaurants={this.state.restaurants}/>
          </ul>

        </div>
      </div>

      <button> Go to the restaurant</button>
    </React.Fragment>
    );
  }
}

export default Landing;