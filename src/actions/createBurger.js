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
    return fetch('', request) // http here 
    .then(response => response.json())
  }
}

export default CreateBurger;