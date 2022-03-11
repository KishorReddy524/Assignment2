const express = require('express')
const connect= require("./configs/db")
const app = express()
const port = 3000;
const usercontroller=require("./controllers/user.controllers")
app.get('/', (req, res) => {
  res.send('Hello kishore')
})
app.get('/book', (req, res) => {
  res.send('Harry Potter')
})
app.use("/form",usercontroller)
app.listen(port, async() => {
    console.log("connect");
    await connect()
  console.log(`Example app listening on port ${port}`)
})