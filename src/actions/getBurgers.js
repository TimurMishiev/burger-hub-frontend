const GetBurgers = {
  fetchBurgers () {
    return fetch('http://localhost:3000/api/v1/restaurants/1/burgers')
    .then(r => r.json())

  }
}

export default GetBurgers;