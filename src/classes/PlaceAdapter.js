const mongoose = require("mongoose")
const Place = require("../models/Place")


class PlaceDb{
    constructor(){
    }


    static async get(){
        return await Place.find().exec()
    }


    static async getWithLim(lim=10){
        return await Place.find().limit(lim).exec()
    }


    static async getId(placeId){
        return await Place.findById(placeId).exec()
    }
}


module.exports = PlaceDb