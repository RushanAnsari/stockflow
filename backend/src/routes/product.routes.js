const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
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
module.exports = router;