const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("StockFlow API is running");
});

app.get("/api/products", (req, res) => {
    res.send(200).json({
        success: true,
        data:[
            {
                id:101,
                name:"Coca Cola",
                selling_price: 40
            },
            {
                id:102,
                name: "Pepsi",
                selling_price: 40
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`StockFlow server running on port ${PORT}`);
});