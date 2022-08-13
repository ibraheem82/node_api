const products = require('../data/products')
const {v4: uuidv4} = require('uuid')
const { writeDataToFile } = require('../utils')


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


function create(product) {
    return new Promise((resolve, reject) => {
        // * wiil generate a unique (id) for each product created.
        const newProduct = {
           id: uuidv4(), ...product}
        //    * wiil add to the existing products.
         products.push(newProduct)
         writeDataToFile('./data/products.json', products)
         resolve(newProduct)
  })
}



function update(id, product) {
    return new Promise((resolve, reject) => {
        // * Will coming as an array so need to find the correct index of the product we want to update.
        const index = products.findIndex((p) => p.id === id)
        products[index] = {id,  ...product}
         writeDataToFile('./data/products.json', products)
        //  * update the product specific index
         resolve(products[index])
  })
}


module.exports = {
    findAll, 
    findById,
    create,
    update
}
