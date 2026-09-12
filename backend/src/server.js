const express = require("express");
const productRoutes = require("./routes/product.routes");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "StockFlow API is running"
    });
});
app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`StockFlow server running on port ${PORT}`);
});