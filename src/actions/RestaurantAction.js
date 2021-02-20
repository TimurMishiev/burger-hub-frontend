const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

const RestaurantAction = {
  fetchRestaurants () {
    return fetch(`${API_URL}/restaurants`)
    .then(response => response.json())
  }
}
export default RestaurantAction;