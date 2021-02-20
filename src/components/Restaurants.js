import React from 'react';

const Restaurants = ({ restaurants }) => {
  const renderRestaurants = restaurants.map(restaurant => 
  <p key={restaurant.id}>{restaurant.title}{restaurant.url}</p>
  )

  return (
    <div>
      {renderRestaurants}
    </div>
  )
}

export default Restaurants;