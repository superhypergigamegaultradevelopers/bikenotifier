const express = require("express");
const passport = require("passport");
const router = express.Router();
const bodyParse = require("body-parser");
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Report = require("../models/reports");
const Journey = require("../models/journeys");
const cloudinary = require("../options/cloudinary");
const CommentModel = require("../models/comments");

router.post(
  "/report/add-comment/:id",
  cloudinary.single("photo"),
  (req, res, next) => {
    console.log("req.body.content: ", req.body.content);
    const content = req.body.content;
    const imagePath = req.file.secure_url;
    const imageName = req.file.originalname;
    const newComment = new CommentModel({
      content,
      imagePath,
      imageName
    });

    newComment
      .save()
      .then(comment => {
        Report.findByIdAndUpdate(req.params.id, {
          $push: { comments: comment._id }
          
        })
          .then(() => {
            console.log("comment was saved!");
            res.redirect("/");
          })
          .catch(err => console.log("error saving"));
      })
      .catch(err => console.log("error saving a comment in database"));
  }
);

router.post(
  "/journey/add-comment/:id",
  cloudinary.single("photo"),
  (req, res, next) => {
    console.log("req.body.content: ", req.body.content);
    const content = req.body.content;
    const imagePath = req.file.secure_url;
    const imageName = req.file.originalname;
    const newComment = new CommentModel({
      content,
      imagePath,
      imageName
    });

    newComment
      .save()
      .then(comment => {
        Journey.findByIdAndUpdate(req.params.id, {
          $push: { comments: comment._id }
        })
          .then(() => {
            console.log("comment was saved!");
            res.redirect("/");
          })
          .catch(err => console.log("error saving"));
      })
      .catch(err => console.log("error saving a comment in database"));
  }
);

module.exports = router;
