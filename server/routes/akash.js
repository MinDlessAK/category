const express = require('express')
const {AkashController}=require("../controllers/index")

const Router=express.Router();

Router.get("/am",AkashController.akash)

module.exports=Router
