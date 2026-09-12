const productService = require("../services/product.service");
const getProducts = (req, res) => {
    const products = productService.getProducts();
    res.status(200).json({
        success: true,
        data:products
    });
};
module.exports = {
    getProducts
};
