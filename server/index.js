const express = require('express')

const app=express()
const port=6500



app.listen(port,function(){
    console.log(`Welcome to My Server gandfatika${port}`)
})

module.exports=app;