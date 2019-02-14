const express = require("express");
const passport = require('passport');
const router = express.Router();
const bodyParse=require('body-parser')
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Report = require('../models/reports');
const Journey = require('../models/journeys');
const cloudinary = require("../options/cloudinary");
const marks = require('../models/marks.js')


// router.get("/",(req,res,next)=>{
//     res.render("tracking/map")
// })

router.get("/journeys", (req,res,next)=>{
  Journey.find({}).then(journeys => {
    res.json({
      journeys
    })
  })
})

router.get("/journey/new", ensureLoggedIn("/"),(req, res, next)=>{

  console.log('Hi')
 
 
    res.render("./publications/journey-Form");
  
 })

router.get("/reports",(req,res,next)=>{
  Report.find({}).then(reports => {
    res.json({
      reports
    })
  })
})

router.post("/journey/new"/* , ensureLoggedIn("/") */,(req,res,next)=>
{ //ESTE VA A SER EL DE JOURNEYYYYYYYYY
    console.log("va o no va",typeof( req.body.marks3),req.body.marks)
    marks.create(
    //    // { _id: mark._id }, 
      {location: {lat:req.body.marks,lng:req.body.marks3},
      pic:"String"
      }
    //   //  done
    //   );
    ).then(()=>
    {
      console.log('PRIMER THEN')
      Journey.create(
      {
      markEnd: {lat:req.body.marks,lng:req.body.marks3},
      identifier:req.body.identifier,
      kindOfJourney: req.body.kindOfJourney,
      creatorId: req.user._id,
     // markEnd: req.body.markEnd,
      //likes: 3,req.body.likes,
      //dislikes:2req.body.dislikes

      }).then(()=>{
       res.redirect("/navi/journey/new")
      }).catch(() => console.log('lalalalalalalalalalala'))
    }).catch(()=>console.log('NOOOOOOOOOOOOOOOOOOOo'))
    
})

router.get("/journey/:id"/* , ensureLoggedIn("/") */,(req, res, next)=>{
  /* console.log(req.params.id) */
  Journey.findById(req.params.id)
  .populate("comments")
  .populate("creatorId")
  .then(journey => {
    console.log(journey);
    res.render("./publications/journey-view", journey);
  })
  .catch(error => {
    console.log(error);
  });
 })

 router.get("/report/new", ensureLoggedIn("/"),(req, res, next)=>{

  console.log('Hi')
 
 
    res.render("./publications/reports-Form");
  
 })

router.get("/report/:id"/* , ensureLoggedIn("/") */,(req, res, next)=>{
 /* console.log(req.params.id) */
 Report.findById(req.params.id)
 .populate("comments")
 .populate("creatorId")
 .then(report => {
   console.log("patata")
   console.log(report);
   res.render("./publications/report-view", report);
 })
 .catch(error => {
   console.log(error);
 });
})


router.post("/report/new", ensureLoggedIn("/"),cloudinary.single("photo"),(req,res,next)=>
{
  const imagePath = req.file.secure_url;
  const imageName = req.file.originalname;
    console.log("va o no va",typeof( req.body.marks3),req.body.marks)
    marks.create(
    //    // { _id: mark._id }, 
      {location: {lat:req.body.marks,lng:req.body.marks3},
      pic:"String"
      }

    //   //  done
    //   );
    ).then(()=>
    {
      Report.create(
      {
      creatorId: req.user._id,
      locationReport: {lat:req.body.marks,lng:req.body.marks3},
      content:req.body.content,
      name: req.body.name,
      picPath: imagePath,
      picName: imageName,
      nature: req.body.nature,
      severity: req.body.severity,
      state: req.body.state,
      likes: 3,//req.body.likes,
      dislikes:2// req.body.dislikes
      
      }).then(()=>{
        res.redirect("/navi/report/new")
       }).catch(() => console.log('lalalalalalalalalalala'))
     }).catch(console.log('NOOOOOOOOOOOOOOOOOOOo'))
    
//     )
    
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