const http = require("http");
// * Using destructuring
const { getProducts, getProduct, createProduct, updateProduct } = require("./controllers/productController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    // * Coming from our controller.
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    // * wiil turn it into an array
    // * will give us the [ID] of the each product that is passed in.
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
  } else if (req.url === '/api/products' && req.method === "POST") {
    createProduct(req, res)

  } else if (req.url.match(/\/api\/products\/([0-9]+)/) &&
  req.method === "PUT"){
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found." }));
  }
});
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// res.writeHead(200, {'Content-Type': 'application/json'})
// res.statusCode = 200
// res.setHeader = ('Content-Type', 'text/html')
// res.write('<h1>Ibraheem Omikunle</h1>')
// res.write(JSON.stringify(products))
// ! OR
// res.end(JSON.stringify(products))