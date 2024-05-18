module.exports={

    akash:async(req,res,next)=>{
       let a=req.query
       let b=req.query
       console.log(a,b,"hi")
       return res.json({
        a,b
       })

    }
}