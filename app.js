const express = require('express')
const bodyParser =require('body-parser')
const router_form =require('./router/router_form')
const express_validato =require('express-validator')
const app= express();
const port= 3000;


app.set('views' ,"./views");
app.set("view engine" ,"ejs")
app.use("/Public" , express.static("Public"))
app.use("/", router_form)
app.use(bodyParser.urlencoded({ extended: false })); 
// app.use("/",express_validato)
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log(`ecoute sur le port ${port}`);
})