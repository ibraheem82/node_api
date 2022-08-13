const products = require('../data/products')
const {v4: uuidv4} = require('uuid')

// * will display all the products from the database which is the json file
function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}



function findById(id) {
    return new Promise((resolve, reject) => {
        // * get the one with the product [id]
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}


function findById(id) {
    return new Promise((resolve, reject) => {
        // * get the one with the product [id]
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}
module.exports = {
    findAll, 
    findById
}
