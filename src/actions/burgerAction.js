const burgerAction = {
 fetchBurgers () {
   return fetch('http://localhost:3000/api/v1/burgers')
   .then(response => response.json())
 }
}

export default burgerAction;