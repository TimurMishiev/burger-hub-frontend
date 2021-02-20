import React from 'react';
import { url } from 'stylus';



class Landing extends React.Component {
  

state = {
  ourRestaurants: [],
  display: false,
  title: '',
  url: ''
};

displayList = () => {
  const { display } = this.state;
  this.setState({ display: !display });
};

getTitle = (restaurant) => {
  const {title, url} = restaurant;
  this.setState({ title, url, display: false });
};


render() {
  return (
    <div className='restaurant_select'>
      <div className='restaurant_select_top'>
        
        <div onClick={this.displayList}
        className='restaurant_select_top-header font-effect-outline'>Choose a restaurant</div>
        
          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div> 
      </div>

      {this.state.display ? (<div className='restaurant_select_bottom'>
        <ul>
          {this.state.ourRestaurants.map(restaurant => {
            return <li onClick={() => this.getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>;
            })}
        </ul>
      </div>) : null}
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