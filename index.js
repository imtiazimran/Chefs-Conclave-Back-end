const express = require('express')
const app = express()
const port = 8570

app.get('/', (req, res) =>{
    res.send('hello World !')
})

app.listen(port, ()=>{
    console.log(`my server is running on: ${port}`)
})