const express = require("express")
const app = express()
const path = require('path');
let date = new Date()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/",function(req, res){
    res.sendFile(path.join(__dirname+"/index.html"))
    if(req.method == "GET"){
        console.log(`${req.method} ${req.headers.host}${req.url}`)
    }
    
    else if(req.method == "POST"){
        console.log(`${req.method} ${JSON.stringify(req.body)}`)
    }
  })


app.listen(3000, () =>{
    console.log("Listening on port 3000")
})

