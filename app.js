const express = require('express')
const app = express()
const port = 3000


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

app.get('/', (req, res) => {
  const car = {
    temp: getRndInteger(50, 100),
    fuel: getRndInteger(0, 100),
  }
  res.send(JSON.stringify(car))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
