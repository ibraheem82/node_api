const fs  = require('fs')
// * function will write data to the file.
function writeDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf-8', (err) => {
        if(err) {
            console.log(err)

        }
    })
}

module.exports = {
    writeDataToFile
}