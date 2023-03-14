const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.get('/personnel', (req, res) => {
  console.log('getting /personnel...')
  res.status(200)
  res.send('getting /personnel...')
})

app.get('/personnel/:id', (req, res) => {
  const id = req.params.id;
  console.log(`getting /personnel/${id}`)
  res.status(200)
  res.send(`getting /personnel/${id}`)
})

app.get('/personnel/:name', (req, res) => {
  const name = req.params.name;
  console.log(`getting /personnel/${name}`)
  res.status(200)
  res.send(`getting /personnel/${name}`)
})

app.get('/personnel/:age', (req, res) => {
  const age = req.params.age;
  console.log(`getting /personnel/${age}`)
  res.status(200)
  res.send(`getting /personnel/${age}`)
})

app.delete('/personnel/:id', (req, res) => {
  const id = req.params.id;
  console.log(`getting /personnel/${id}`)
  res.status(200)
  res.send(`getting /personnel/${id}`)
})

app.put('/personnel', (req, res) => {
  const id = req.params.id;
  console.log(`getting /personnel/${id}`)
  res.status(200)
  res.send(`getting /personnel/${id}`)
})

app.post('/personnel', (req, res) => {
  res.status(200)
  res.send("POST Request Called")
})


app.listen(port, () => {
  console.log(`Server listening on port ${hostname}:${port}`)
})