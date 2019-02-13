const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const journeySchema = new Schema
({
    //checkpoints:[],//desde api de google
    identifier:String, //ya veremos como entra
    //textbox
//markIni: {type: Schema.Types.ObjectId, ref: "Marks"},//ver como entra desde Marks
    markEnd:{lat:Number, lng:Number},//ver como entra desde Marks
    kindOfJourney:{type:String, enum:['Job journey','Pleassure journey','Buying journey','Just for a walk']}
},
{
    timestamps:
    {
        createdAt:'created_at',
        updatedAt:'updated_at'
    } 
})
const Journey = mongoose.model("Journey", journeySchema);
module.exports = Journey;