const fs = require("fs")
const path = require("path")


const readJson = (fileName) => {
    const file = fs.readFileSync(path.join(__dirname, "..", fileName))
    return JSON.parse(file)
}


module.exports = {
    readJson: readJson
}