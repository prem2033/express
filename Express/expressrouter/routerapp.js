const express=require('express');
const router=express.Router();

router.get('/router',(request,response)=>{
    response.send("this is router call")
    response.end();
})

router.get('/class',(request,response)=>{
    response.send("this is from class router");
    response.end();
})

module.exports=router
