const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema(
  {
    content: String,
    name: String,
    creatorId: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    locationReport:{lat:Number, lng:Number},
    picPath: String,
    picName: String,
    nature: { type: String, enum: ["damage", "infrastructure", "cleanup", "others"]},
    severity: { type: String, enum: ["serious", "light"]},
    state: { type: String, enum: ["done", "not started", "in process"], default: ["not started"]},
    likes: Number,
    dislikes: Number
  },
  {
    timestamps: true
  }
);

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;