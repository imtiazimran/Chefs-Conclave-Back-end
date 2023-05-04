const express = require('express')
const app = express()
const port = 8570
const cors = require('cors');
const recipies = require('./recipie.json')
const chef = require('./Chef_Info.json')
const tips = require('./cookingTips.json')
const chefRecipe = require('./ChefRecipe.json')
const blog = require('./blog.json')

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

app.get('/chef/:Id', (req, res) =>{
    const Id = req.params.Id;
    // Here, you can use the id to retrieve the specific chef data and send it back to the client.
    const selectedChef = chef.find(chef=> chef.id == Id)
    res.send(selectedChef)
});


app.get('/chefRecipe', (req, res) =>{
    res.send(chefRecipe)
})

app.get('/tips', (req, res) =>{
    res.send(tips)
})

app.get('/blog', (req, res) =>{
    res.send(blog)
})

app.listen(port, ()=>{
    console.log(`my server is running on: ${port}`)
})