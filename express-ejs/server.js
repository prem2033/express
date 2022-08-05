//import export
const express=require('express');
const app=express()
//use ejs engine for rendering
app.set('view engine','ejs')

//define port
const port=process.env.PORT || 3000
//import router from router express
const router=require('./expressrouter/routerapp')
//middle ware to use router
app.use('/routerclass',router);

app.use('/',(request,response)=>{
   console.log("start")
   response.render('index',{title:"Home"})
})

app.listen(port,()=>{console.log(`listening to http://localhost:${port}`)})