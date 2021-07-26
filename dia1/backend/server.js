const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produtos', (req, res) => {
    res.send('10 - canetas\n20 - borrachas\n5 - cadernos')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
