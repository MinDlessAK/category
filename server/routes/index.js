const express = require('express')

const Router=express.Router();

Router.use("/ak",require("./akash"))

module.exports=Router