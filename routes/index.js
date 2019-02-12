const express = require('express');
const router  = express.Router();
const passport = require('passport');
const hbs=require ('handlebars')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('tracking/menu');
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
