
fetch("http://localhost:3000/api/v1/users/1")
.then(r=>r.json())
  .then(console.log)