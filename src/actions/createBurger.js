const CreateBurger = {
  postBurger(burger) {
   const request = {
      method: 'POST',
      body: JSON.stringify({
        burger: burger
      }),
       headers: {
          'Content-Type': 'application/json',
       }
    };
    return fetch('http://localhost:3000/api/v1/restaurants/1/burgers', request) 
    .then(response => response.json())
  }
}

export default CreateBurger;