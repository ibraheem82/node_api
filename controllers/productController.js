const Product = require("../models/productModel");

//*  @desc Gets All Products
//*  @route Gets /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

//*  @desc Gets Single Product
//*  @route Gets /api/product/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}


//*  @desc Create a Product
//*  @route POST /api/product/:id
async function createProduct(req, res, id) {
    try {
        const product = {
            title: 'test product',
            description : 'my name is ibraheem omikunle',
            price: 100
        }
        // ! [201] created
        res.writeHead(201, { "Content-Type": "application/json" })
        const newProduct = Product.create(product)
        return res.end(JSON.stringify(newProduct))
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
  getProducts,
  getProduct,
};
