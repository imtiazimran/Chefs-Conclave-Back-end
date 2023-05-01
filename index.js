const express = require('express')
const app = express()
const port = 8570
const cors = require('cors');
const recipies = require('./recipie.json')
const chef = require('./Chef_Info.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('hello World !')
})
app.get('/recipies', (req, res) =>{
    res.send(recipies)
})

app.get('/chef', (req, res) =>{
    res.send(chef)
})

app.listen(port, ()=>{
    console.log(`my server is running on: ${port}`)
})