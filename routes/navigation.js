const express = require("express");
const passport = require('passport');
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Report = require('../models/reports');
const Journey = require('../models/journeys');

// router.get("/",(req,res,next)=>{
//     res.render("tracking/map")
// })

router.get("/journeys"/* ,ensureLoggedIn("/") */,(req,res,next)=>{
  Journey.find({}).then(journeys => {
    res.json({
      journeys
    })
  })
})

router.get("/reports"/* ,ensureLoggedIn("/") */,(req,res,next)=>{
  Report.find({}).then(reports => {
    res.json({
      reports
    })
  })
})

router.get("/journey/:id"/* , ensureLoggedIn("/") */,(req, res, next)=>{
  /* console.log(req.params.id) */
  Journey.findById(req.params.id)
  /* .populate("comments") */
  .then(journey => {
    console.log(journey);
    res.render("./publications/journey-view", journey);
  })
  .catch(error => {
    console.log(error);
  });
 })

router.get("/report/:id"/* , ensureLoggedIn("/") */,(req, res, next)=>{
 /* console.log(req.params.id) */
 Report.findById(req.params.id)
 /* .populate("comments") */
 .then(report => {
   console.log(report);
   res.render("./publications/report-view", report);
 })
 .catch(error => {
   console.log(error);
 });
})


// router.get("/trip",midelweeeeer,(req,res,next)=>{
//points of interest
// })

// router.get("/trip",midelweeeeer,(req,res,next)=>{
//FILTER
// })

 router.get("/newpost"/* ,midelweeeeer */,(req,res,next)=>{
//Nos tiene que llevar a un formulario donde escribirmos un post nuevo
 })

router.post("/newpost"/* ,midelweeeeer */,(req,res,next)=>{
//Recoge de un formulario
 })


 router.get("/posts/:_id"/* ,midelweeeeer */,(req,res,next)=>{
//points of interest
 })

 module.exports = router;