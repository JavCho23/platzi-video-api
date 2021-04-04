const express = require('express');
const {config} = require('./config/index')
const app = express()

app.get("/",function (req,res) {
  res.send('Hello world')
})

app.get('/json',function (req,res) {
  res.json({hello:'wordl'})
})

app.listen(config.port,()=>{
  console.log(`Listening http://localhost:${config.port}`);
})