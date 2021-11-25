const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 
app.set('view engine', 'ejs');
app.use(express.static("Public"))

const port = 3000

var items = [];

app.get('/', (req, res) => {
  
    var today = new Date();
    // var currentDay = today.getDay(); 

    var option ={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    
    var day = today.toLocaleDateString("en-US", option) ;

    res.render('list',{kindOfDay:day,newListItems:items})
})

app.post('/',(req,res)=>{
     item = req.body.newItem
    items.push(item)
    res.redirect("/")
})

app.listen(port)