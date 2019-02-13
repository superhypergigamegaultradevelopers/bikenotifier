const express = require("express");
const passport = require('passport');
const router = express.Router();
const bodyParse=require('body-parser')
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const marks = require('../models/marks.js')


// router.get("/",(req,res,next)=>{
//     res.render("tracking/map")
// })

router.get("/trips",ensureLoggedIn("/"),(req,res,next)=>{
//render la pagina de trip
})

router.post("/navi",bodyParse(),(req,res,next)=>{
    console.log("va o no va",typeof( req.body.marks))
    marks.create(
    //    // { _id: mark._id }, 
       {location: {lat:req.body.marks,lng:req.body.marks3}}
    //   //  done
    //   );
    
    )
    
})

// router.get("/trip",midelweeeeer,(req,res,next)=>{
 //reports
// })

// router.get("/trip",midelweeeeer,(req,res,next)=>{
//points of interest
// })

// router.get("/trip",midelweeeeer,(req,res,next)=>{
//FILTER
// })

 router.get("/newpost",(req,res,next)=>{
//Nos tiene que llevar a un formulario donde escribirmos un post nuevo
 })

router.post("/newpost",(req,res,next)=>{
//Recoge de un formulario
 })


 router.get("/posts/:_id",(req,res,next)=>{
//points of interest
 })

 module.exports = router;