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
  console.log(`deleting /personnel/${id}`)
  res.status(200)
  res.send(`deleting /personnel/${id}`)
})

app.put('/personnel/:id', (req, res) => {
  const id = req.params.id;
  const body = {
    //implement id solution
    id: id,
    name: req.body.name,
    address: req.body.address,
    state: req.body.state,
    zip: req.body.zip,
    age: req.body.age
  }
  console.table(body);
  res.status(200)
  res.send(`updating /personnel/${id}`)
})

app.post('/personnel', (req, res) => {
  const body = {
    //implement id solution
    id: 1,
    name: req.body.name,
    address: req.body.address,
    state: req.body.state,
    zip: req.body.zip,
    age: req.body.age
  }
  console.table(body);
  res.status(200)
  res.send(`posting new personel ${body}`)
})


app.listen(port, () => {
  console.log(`Server listening on port ${hostname}:${port}`)
})