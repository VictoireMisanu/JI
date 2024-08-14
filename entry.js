const express = require("express")
const mainApp = express()


mainApp.set("view engine", "ejs");
mainApp.set("views", __dirname + "/views");
mainApp.use(express.static(__dirname + "/public"));
mainApp.use(express.json());

mainApp.get("/", async(req, res)=>{
   
    res.render('index')
});
    


mainApp.get('/*', (req, res) =>{
    res.render("404")
})

const port = 3000

mainApp.listen(port, function(){
    console.log(`the App runs on http://localhost:${port}`)
})