const mongoose = require("mongoose");
const Schema  = mongoose.Schema;



const marksSchema = new Schema ({
  //name:String,
 // markerType: {type: String, enum: ["damage", "infrastructure", "cleanup", "others"]},
  location: { type: { type: String }, coordinates: [{lat,lng}] }
}, {
  timestamps:true
});

marksSchema.index({ location: '2dsphere' });
module.exports = mongoose.model("Place", markssSchema);

