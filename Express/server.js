const express=require('express');
const app=express()

//define port
const port=process.env.PORT || 3000
//import router from router express
const router=require('./expressrouter/routerapp')
//middle ware to use router
app.use('/routerclass',router);

app.use('/',(request,response)=>{
   response.send("Server started");
   response.end();
})

app.listen(port,()=>{console.log(`listening to http://localhost:${port}`)})