const burgerAction = {
 fetchBurgers () {
   return fetch('http://localhost:3000/api/v1/burgers')
   .then(response => response.json())
 },

 createBurger(burger) {
  const request = {
    method: 'POST',
    body: JSON.stringify({
      burger: burger
    }),
  headers: {
    'Content-Type' : 'application/json',
  }
 
};
   return fetch('http://localhost:3000/api/v1/burgers', request)
   .then(response => response.json())
 }
}

export default burgerAction;