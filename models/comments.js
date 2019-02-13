const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  //textbox
  authorId: { type: Schema.Types.ObjectId, ref: "User" },
  imagePath: String,
  imageName: String
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;