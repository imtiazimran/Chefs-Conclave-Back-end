const express = require('express')
const app = express()
const port = 8570
const cors = require('cors');
const recipies = require('./recipie.json')
const chef = require('./Chef_Info.json')
const tips = require('./cookingTips.json')
const chefRecipe = require('./ChefRecipe.json')

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

app.get('/chefRecipe', (req, res) =>{
    res.send(chefRecipe)
})

app.get('/tips', (req, res) =>{
    res.send(tips)
})

app.listen(port, ()=>{
    console.log(`my server is running on: ${port}`)
})