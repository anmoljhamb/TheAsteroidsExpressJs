// Imports
const express = require("express")
const { default: mongoose } = require("mongoose")
const utils = require("./src/utils")
const Place = require("./src/models/Place")
const PlaceData = require("./src/classes/PlaceAdapter")
const app = express()


// express defaults
const server = utils.readJson("./json/server.json")
app.use(express.static(server["static"]))
app.set("view engine", server["view engine"])
app.set("views", server["views"])



// view functions
const home = async (req, res) => {

    const arr = await PlaceData.get()

    data = {
        'title': "home",
        'header': utils.readJson("./json/header.json"),
        'navbar': utils.readJson("./json/navbar.json"),
        'featured': await PlaceData.getWithLim(3),
        'gallery': arr,
        'reviews': utils.readJson("./json/reviews.json")
    }

    res.render("home", data)
}


const about = (req, res) => {

    data = {
        'title': "about",
        'header': utils.readJson("./json/header.json"),
        'navbar': utils.readJson("./json/navbar.json")
    }

    res.render("about", data)
}


const explore = async (req, res) => {


    data = {
        'title': "explore",
        'header': utils.readJson("./json/header.json"),
        'navbar': utils.readJson("./json/navbar.json"),
        'places': await PlaceData.getWithLim(9)
    }


    res.render("explore", data)
}


const blog = async (req, res) => {
    data = {
        'title': "blog",
        'header': utils.readJson("./json/header.json"),
        'navbar': utils.readJson("./json/navbar.json"),
        'places': await PlaceData.get()
    }

    res.render("blog", data)
}


const getBlog = async (req, res) => {
    // gets blogId as a req.params parameter.

    console.log(`gotten id: ${req.params.blogId}`);
    console.log(await PlaceData.getId(req.params.blogId));

    data = {
        'title': "blog",
        'header': utils.readJson("./json/header.json"),
        'navbar': utils.readJson("./json/navbar.json"),
        'place': await PlaceData.getId(req.params.blogId)
    }

    res.render("getBlog", data)
}



// routing
app.get(["/", "/home"], home)
app.get("/about", about)
app.get("/explore", explore)
app.get("/blog", blog)
app.get("/blog/:blogId", getBlog)


// connecting to database first.
dbUrl = `mongodb://${server["dbHost"]}:${server["dbPort"]}/${server["dbName"]}`
mongoose.connect(dbUrl)
    .then((res) => {
        console.log(`Connected successfully to the database on the url ${dbUrl}`);
        // Once the db is connected, we are starting listening.
        app.listen(server["port"], server["hostname"], () => {
            console.log(`Listening on the url: http://${server["hostname"]}:${server["port"]}`);
        })
    })
    .catch((err) => {
        console.log(`There was an error while connecting to database on the url: ${dbUrl}`);
    })
