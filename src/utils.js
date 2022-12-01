const fs = require("fs")


const readJson = (fileName) => {
    const file = fs.readFileSync(fileName)
    return JSON.parse(file)
}


module.exports = {
    readJson: readJson
}