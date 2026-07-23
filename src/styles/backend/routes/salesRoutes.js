const express = require("express");

const router = express.Router();


const {
    getSales,
    createSale,
    updateSale,
    deleteSale
} = require("../controllers/salesController");



// GET SALES
router.get("/", getSales);


// CREATE SALE
router.post("/", createSale);


// UPDATE SALE
router.put("/:id", updateSale);


// DELETE SALE
router.delete("/:id", deleteSale);



module.exports = router;