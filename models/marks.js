const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

//  function marks(lat,lng){

const marksSchema = new Schema ({
  //name:String,
 // markerType: {type: String, enum: ["damage", "infrastructure", "cleanup", "others"]},
  location:{lat:Number, lng:Number}
}, {
  timestamps:true
});
// }
marksSchema.index({ location: '2dsphere' });
module.exports = mongoose.model("Mark", marksSchema);
