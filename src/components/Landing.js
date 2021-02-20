import React from 'react';



class Landing extends React.Component {
  

state = {
  ourRestaurants: []
}

render() {
  return (
    <div className='restaurant_select'>
      <div className='restaurant_select_top'>
        <div className='restaurant_select_top-header font-effect-outline'>Choose a restaurant</div>
        
          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div> 
      </div>

      <div className='restaurant_select_bottom'>
        <ul>
          {this.state.ourRestaurants.map(restaurant => {
            return <li key={restaurant.id}>{restaurant.title}</li>;
            })}
        </ul>
      </div>
      <button>Got to the restaurant</button>
      </div>
    
  );
}

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/restaurants')
      .then(response => response.json())
      .then(data => {
        this.setState({
          ourRestaurants: data
        })
      })
  }
}


export default Landing;