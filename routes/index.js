const express = require('express');
const router  = express.Router();
const passport = require('passport');
const hbs=require ('handlebars')
const marks=require("../models/marks")
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('tracking/menu');
  marks.find({location})
});

router.get("/", (req, res, next) => {
  res.render("/layout", { "message": req.flash("error") });
  
});

router.post("/", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
  failureFlash: true,
  passReqToCallback: true
}));

module.exports = router;
