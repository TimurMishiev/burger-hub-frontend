export const setCurrent = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

// asynchtonous action creators
exportconst login = credentials => {
  return dispatch => {

    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: "Timur", password: "password"})
    })
  }
}