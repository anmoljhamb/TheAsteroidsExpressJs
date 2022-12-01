const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model


const placeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fact: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    texts: {
        type: Array,
        required: true
    }
})


const Place = new model("Place", placeSchema)
module.exports = Place