const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const journeySchema = new Schema
({
    checkpoints:[],//desde api de google
    identifier:String, //ya veremos como entra
    markIni: {type: Schema.Types.ObjectId, ref: "Marks"},//ver como entra desde Marks
    markEnd: {type: Schema.Types.ObjectId, ref: "Marks"},//ver como entra desde Marks
    kindOfJourney:{type:String, enum:['Job journey','Pleassure journey','Buying journey','Just for a walk']}
},
{
    timestamps:
    {
        createdAt:'created_at',
        updatedAt:'updated_at'
    } 
})